var express = require('express');
var router = express.Router();
var Patient = require('../model/Patient')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const User = require('../model/User')

router.use(cookieParser())

// Making a middleware to make sure the user is authenticated
// before creating a new patient

const isAuthenticated = async (req, res, next) => {
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


// Home page route.
router.post('/', isAuthenticated, function (req, res) {

    // let's validate the data using another middleware in here

    var patient = new Patient(req.body)

    patient.save();

    res.send({ message: "patient was added successfully" })
})

// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
})

module.exports = router;