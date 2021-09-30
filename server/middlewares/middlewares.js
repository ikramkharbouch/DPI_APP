const jwt = require('jsonwebtoken')
var User = require('../model/User')

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


module.exports = {
    isAuthenticated: isAuthenticated
}