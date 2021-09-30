var express = require('express');
var router = express.Router();
var Appointment = require('../model/Appointment')
const cookieParser = require('cookie-parser')

const middlewares = require('../middlewares/middlewares')

router.use(cookieParser())

router.post('/add', middlewares.isAuthenticated, (req, res) => {

    const { title, day, timing } = req.body

    const appointment = new Appointment({
        title: title,
        day: day,
        timing: timing
    })

    appointment.save()

    res.status(200).json({message: "Appointment was set successfully"})

})

module.exports = router;

