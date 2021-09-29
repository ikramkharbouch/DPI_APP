var mongoose = require('mongoose')

var AppointmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Timing: {
        type: Date,
        default: Date.now(),
        required: true
    }
})


module.exports = mongoose.model('Appointment', AppointmentSchema) 