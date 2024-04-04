'use strict'


function handleServerError(err, req, res, next) {
    console.error(err); 
    res.status(500).send('500 Internal Server Error');
}

module.exports = handleServerError;
