var mongoose = require('mongoose')

var AppointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
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
    },
    doctor: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Appointment', AppointmentSchema)