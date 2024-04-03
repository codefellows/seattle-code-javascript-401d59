'use strict';

// define all routing logic for our RESTful service
const express = require('express');
const { Pokemon } = require('../models');

const router = express.Router();

// router.use(validator);

// reading from the pokemon table
router.get('/pokemon', async (req, res) => {
  let records = await Pokemon.findAll();
  res.json(records);
});

router.get('/pokemon/:id', async (req, res) => {
  let records = await Pokemon.findOne({ where: { id: req.params.id} });
  res.json(records);
});

// create a new pokmeon in the table
router.post('/pokemon',  async(req, res) => {
  // where is the pokemon data?
  let record = await Pokemon.create(req.body);
  res.json(record);
});

//update an existing pokemon in the table
router.put('/pokemon/:id', (req, res) => {});

// remove an existing pokemon in the table
router.delete('/pokemon/:id', (req, res) => {});

module.exports = router;