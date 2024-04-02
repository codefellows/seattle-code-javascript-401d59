function notFound(req, res, next) {
  res.status(404).send('Invalid sandwich route');
}

module.exports = notFound;