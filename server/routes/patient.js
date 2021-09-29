var express = require('express');
var router = express.Router();
var Patient = require('../model/Patient')
const middlewares = require('../middlewares/middlewares')


// Making a middleware to make sure the user is authenticated
// before creating a new patient


// Home page route.
router.post('/add', middlewares.isAuthenticated, function (req, res) {

    var patient = new Patient(req.body)

    patient.save();

    res.send({ message: "patient was added successfully" })
})

// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
})

module.exports = router;