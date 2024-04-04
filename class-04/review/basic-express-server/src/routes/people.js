'use strict';

const express = require('express');
const { People } = require('../models');

const router = express.Router();

//Get All Records - Method: GET
router.get('/people', async(req, res) => {
    console.log('Hitting the /get People Route!');
    let records = await People.findAll();
    console.log('HERE ARE THE RECORDS!!', records);
    res.json(records);
});

//Get One Record - Method: GET
router.get('/people/:id', async(req, res) => {
    let records = await People.findOne({ where: { id: req.params.id} });
    res.json(records);
});

//Add a Record - Method: POST
router.post('/people', async(req, res) => {
    let records = await People.create(req.body);
    res.json(records)
});

// Update a Record - Method: PUT
router.put('/people/:id', async(req, res) => {
    let records = await People.findByPk(req.params.id); //Pk = Primary Key
    let updatedRecord = await records.update(req.body); 
    res.json(updatedRecord);
});

//Delete a Record - Method: DELETE
router.delete('/people/:id', async(req, res) => {
    let records = await People.findByPk(req.params.id);
    await records.destroy(req.body);
    res.json(null);
});

module.exports = router;