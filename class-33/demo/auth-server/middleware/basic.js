const base64 = require('base-64');
const { User } = require('../models');

async function basic(request, response, next) {

  try {
    const authString = request.headers.authorization.split(' ')[1];
    const [ username, password ] = base64.decode(authString).split(':');
    const validUser = await User.authenticateBasic(username, password);
    request.user = validUser;
    next();
  }catch (e) {
    next(e);
  }
}

module.exports = basic;