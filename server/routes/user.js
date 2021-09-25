var express = require('express');
var router = express.Router();
var User = require('../model/User')
const bcrypt = require('bcryptjs')

// Incldue the body parser tor retrieve the data in json format
const bodyParser = require('body-parser')

router.use(bodyParser.json())


router.get('/', (req, res) => {
    res.send({message: 'This is the user route'})
})

router.post('/register', async (req, res) => {

    const { username, email, password, repeatPassword } = req.body

    // data validation in here

    if (password !== repeatPassword) {
        res.status(403).send({message: "The passwords are not matched"})
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

module.exports = router;