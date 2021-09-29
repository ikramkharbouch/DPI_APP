var express = require('express');
var router = express.Router();
var Appointment = require('../model/Appointment')
const cookieParser = require('cookie-parser')

const middlewares = require('../middlewares/middlewares')

router.use(cookieParser())

router.post('/add', middlewares.isAuthenticated, (req, res) => {

    console.log(req.body)
    const { title, timing } = req.body
    const appointment = new Appointment({

    })

    res.json({message: "Ha f mok"})

})

module.exports = router;

// Making a middleware to make sure the user is authenticated
// before creating a new patient

