// error-handlers/500.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server Error' });
};

module.exports = errorHandler;
