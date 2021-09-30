var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    maritalStatus: {
        type: String,
        enum: ['Single', 'Married', 'Widow'],
        required: true
    },
    nationality: {
        type: String,
        enum: ['Morocco', 'France', 'Germany'],
        required: true
    },
    phoneNumber: {
        type: Number
    },
    bloodType: {
        type: String,
        enum: ['AB+', 'A+', 'B+', 'O+', 'AB-', 'A-', 'B-', 'O-'],
        required: true
    },
    vaccinated: {
        type: Boolean,
        required: true
    },
    vaccinationDate: {
        type: Date
    },
    medicalAntecedents: [{
        type: Array,
        required: true
    }]
});

module.exports = mongoose.model('Patient', PatientSchema);