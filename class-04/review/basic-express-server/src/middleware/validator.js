'use strict'

function validateName(req, res, next) {
    if (!req.query.name) {
        next('Name parameter is missing');
    } else {
        next();
    }
}

module.exports = { 
    validateName: validateName 

};