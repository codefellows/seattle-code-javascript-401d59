'use strict';

const express = require('express');
const { Sport } = require('../models');

const router = express.Router();

//Get All Records - Method: GET
router.get('/sport', async(req, res) => {
    let records = await Sport.findAll();
    res.json(records);
});

//Get One Record - Method: GET
router.get('/sport/:id', async(req, res) => {
    let records = await Sport.findOne({ where: { id: req.params.id }});
    res.json(records);
});

//Add a Record - Method: POST
router.post('/sport', async(req, res) => {
    let records = await Sport.create(req.body);
    res.json(records);
});

// Update a Record - Method: PUT
router.put('/sport/:id', async(req, res) => {
    let records = await Sport.findByPk(req.params.id);
    let updatedRecord = await records.update(req.body);
    res.json(updatedRecord);
});

//Delete a Record - Method: DELETE
router.delete('/sport/:id', async(req, res) => {
    let records = await Sport.findByPk(req.params.id);
    await records.destroy(req.body);
    res.json(null); 
});

module.exports = router;