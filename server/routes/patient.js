var express = require('express');
var router = express.Router();
var Patient = require('../model/Patient')
const middlewares = require('../middlewares/middlewares')
const cookieParser = require('cookie-parser')

router.use(cookieParser())

// Making a middleware to make sure the user is authenticated
// before creating a new patient


// Home page route.
router.post('/add', middlewares.isAuthenticated, middlewares.validatePatient, (req, res) => {

    // Validate the patient's schema

    var patient = new Patient(req.body)

    patient.save();

    res.send({ message: "patient was added successfully" })
})

// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
})

module.exports = router;