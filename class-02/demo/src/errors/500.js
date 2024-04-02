function serverError(err, req, res, next) {
  console.log('SANDWICH SERVER ERROR:', err);
  res.status(500).send('Not a good sandwich');
}

module.exports = serverError;