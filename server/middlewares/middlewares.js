const jwt = require('jsonwebtoken')
var User = require('../model/User')

const { patientSchema, appointmentSchema } = require('../helpers/validationSchema')

const isAuthenticated = async (req, res, next) => {

    console.log(req.cookies)
    try {
        const cookie = req.cookies['jwt']

        const claims = jwt.verify(cookie, 'SECRET')

        const user = await User.findOne({ _id: claims.id })

        if (!user) {
            return res.status(404).send({message: 'User unauthenticated'})
        }
        next()

    } catch (e) {
        console.log(e)
        res.send({message: 'You cannot access this route'})
    }
}


const validatePatient = async (req, res, next) => {

    const { error, value } = patientSchema.validate(req.body)

    if (error) {
        return res.status(409).json({ error })
    }
    
    req.body = value;
    next();
}

const validateAppointment = async (req, res, next) => {
    
    const { error, value } = AppointmentSchema

    if (error) {
        return res.status(409).json({ error })
    }
    
    req.body = value;

    next()
}


module.exports = {
    isAuthenticated: isAuthenticated,
    validatePatient: validatePatient,
    validateAppointment: validateAppointment
}