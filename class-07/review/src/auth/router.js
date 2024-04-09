const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
// other imports
// basic middleware??
const basic = require('./middleware/basic');
const { Users } = require('./models');

const router = express.Router();

router.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});

router.post('/signin', basic, async (req, res) => {
  res.send(req.user);
});

module.exports = router;