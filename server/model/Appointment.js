var mongoose = require('mongoose')

var AppointmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Appointment', AppointmentSchema)