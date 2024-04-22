'use strict';

const { Customer, Collection } = require('../models');

const express = require('express');
const router = express.Router();

const CustomerCollection = new Collection(Customer);

router.get('/customers', async (req, res) => {
  let customers = await CustomerCollection.read();
  res.json(customers);
});

router.get('/customers/:id', async (req, res) => {
  let customers = await CustomerCollection.read(req.params.id);
  res.json(customers);
});

router.post('/customers', async (req, res) => {
  let customer = await CustomerCollection.create(req.body);
  res.json(customer);
});
router.put('/customers/:id', async (req, res) => {
  let customer = await CustomerCollection.update(req.params.id, req.body);
  res.json(customer);
})
router.delete('/customer/:id', async (req, res) => {
  let customer = await CustomerCollection.delete(req.params.id);
  res.json(customer);
});

module.exports = router;
