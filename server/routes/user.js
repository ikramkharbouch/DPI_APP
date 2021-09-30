var express = require('express');
var router = express.Router();
var User = require('../model/User')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const cookieParser = require('cookie-parser')

router.use(cookieParser())


// Incldue the body parser tor retrieve the data in json format
const bodyParser = require('body-parser')

router.use(bodyParser.json())


router.get('/', (req, res) => {
    res.send({message: 'This is the user route'})
})

router.post('/register', async (req, res) => {

    console.log(req.body)
    const { username, email, password, repeatPassword } = req.body

    // data validation in here

    if (password !== repeatPassword) {
        return res.status(403).send({message: "The passwords are not matched"})
    }

    if (checkEmail = await User.findOne({ email: email})) {
        return res.status(403).send({message: "The email already exists"})
    }

    // Making the salts to secure the password
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
    })

    const result = await user.save()

    res.status(200).send({message: 'The user was added successfully'})

})

router.post('/login', async (req, res) => {
    
    const { username, password } = req.body

    console.log(req.body)

    const user = await User.findOne({ username: username })

    if (!user) {
        return res.status(404).send({ message: 'User not found'})
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(403).send({ message: 'Invalid password'})
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN_SECRET)

    
    res.cookie('jwt', token, {
        httpOnly: true
    })

    res.send({
        message: 'The user is authenticated'
    })

})

router.get('/user', async (req, res) => {
    try {

        const cookie = req.cookies['jwt']
    
        const claims = jwt.verify(cookie, process.env.JWT_TOKEN_SECRET)
    
        if (!claims) {
            return res.status(401).send({message: 'Unauthenticated'})
        }
    
        const user = await User.findOne({ _id: claims.id })
    
        res.send(user)
    } catch(e) {
        console.log(e)
        res.send({message: 'User unauthenticated'})
    }
})

router.post('/logout', (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 0
    })

    res.send({message: 'The user is logged out'})
})

module.exports = router;