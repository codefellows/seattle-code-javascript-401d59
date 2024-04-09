const { Users } = require('../models');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

/**
 * Basic - validate that a username and password is present in a request header.
 */

async function basicAuth(req, res, next) {

    let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'am9objpmb28=']
    let encodedString = basicHeaderParts.pop();  // am9objpmb28=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password

  try {
    const user = await Users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      req.user = user;
      // call next if valid username and password
      next();
    } else {
      next('Invalid User');
    }
  } catch (error) { res.status(500).send('Server Error'); }

}

module.exports = basicAuth;