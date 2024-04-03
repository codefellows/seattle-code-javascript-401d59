// middleware/validator.js
const validatorMiddleware = (req, res, next) => {
    const { name } = req.query;
    if (!name) {
      return res.status(500).json({ error: 'Name is required in the query string' });
    }
    next();
  };
  
  module.exports = validatorMiddleware;
  