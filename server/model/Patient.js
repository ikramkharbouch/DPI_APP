var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    BirthDate: {
        type: Date,
        required: true
    },
    MaritalStatus: {
        type: String,
        enum: ['Single', 'Married', 'Widow'],
        required: true
    },
    Nationality: {
        type: String,
        enum: ['Morocco', 'France', 'Germany'],
        required: true
    },
    PhoneNumber: {
        type: Number
    },
    BloodType: {
        type: String,
        enum: ['AB+', 'A+', 'B+', 'O+', 'AB-', 'A-', 'B-', 'O-'],
        required: true
    },
    Vaccinated: {
        type: Boolean,
        required: true
    },
    VaccinationDate: {
        type: Date
    },
    MedicalAntecedents: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Patient', PatientSchema);