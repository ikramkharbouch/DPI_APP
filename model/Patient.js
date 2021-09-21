var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    Origins: [{ type: String, enum: ['American Indian or Alaska Native', 'Asian', 'White', 'Hawaiian'], required: true }],
    Antecedents: [{ type: String, enum: ['Allergies', 'Colds and Flu', 'Diarrhea', 'Headaches'], required: true }]
});

module.exports = mongoose.model('Patient', PatientSchema);