const authorize = (capability) => async (request, response, next) => {
  if(request.user.permissions.includes(capability)) {
    next();
  } else {
    next('Unauthorized');
  };
}

module.exports = authorize;