'use strict'

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] 'METHOD':${req.method} 'PATH':${req.path}`);
    next();
}

module.exports = {
    logger: logger
};