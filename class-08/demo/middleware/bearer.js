const { User } = require('../models');

async function bearer(request, response, next) {
  try {
    const token = request.headers.authorization.split(' ')[1];

    const validUser = await User.authenticateBearer(token);
    request.user = validUser;
    next();
  } catch (e) {
    next(e);
  }
}

module.exports = bearer;