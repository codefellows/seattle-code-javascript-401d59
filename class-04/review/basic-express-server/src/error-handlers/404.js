'use strict'


function handleNotFound(req, res) {
    res.status(404).send('Invalid Route. Page not Found.');
}

module.exports = handleNotFound;
