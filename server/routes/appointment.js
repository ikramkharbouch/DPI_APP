var express = require('express');
var router = express.Router();
var Appointment = require('../model/Appointment')
const cookieParser = require('cookie-parser')

const middlewares = require('../middlewares/middlewares')

router.use(cookieParser())

router.post('/add', middlewares.isAuthenticated,  (req, res) => {

    const { patientName,title, day, timing, doctor, disease } = req.body

    const appointment = new Appointment({
        patientName: patientName,
        title: title,
        day: day,
        timing: timing,
        doctor: doctor,
        disease: disease
    })

    appointment.save()

    res.status(200).json({message: "Appointment was set successfully"})

})

module.exports = router;

