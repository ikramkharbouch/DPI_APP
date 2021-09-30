const Joi = require('joi')

const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),
})

const patientSchema = Joi.object({
    firstName: Joi.string().alphanum().min(2).max(24).trim().required(),
    middleName: Joi.string().alphanum().min(2).max(24),
    lastName: Joi.string().alphanum().min(2).max(24).required(),
    birthDate: Joi.date().required(),
    maritalStatus: Joi.string().valid('Single', 'Married'),
    nationality: Joi.string().valid('Morocco', 'France'),
    phoneNumber: Joi.number(),
    bloodType: Joi.string().valid('AB+', 'A+', 'B+', 'O+', 'AB-', 'A-', 'B-', 'O-'),
    vaccinated: Joi.boolean().required(),
    vaccinationDate: Joi.date(),
    medicalAntecedents: Joi.array().items(Joi.string())
})

module.exports = { patientSchema }




/* BloodType: Joi.string().pattern(new RegExp('^\bAB+|A+|B+|O+|AB-|A-|B-|O-\b$')), */