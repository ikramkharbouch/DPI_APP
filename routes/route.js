var express = require('express');
var router = express.Router();
var Patient = require('../model/Patient')

// Home page route.
router.get('/', function (req, res) {

    var patient = new Patient(req.body)

    patient.save();

    res.send({ message: "patient was added successfully" })
})

// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
})

module.exports = router;