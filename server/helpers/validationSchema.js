const Joi = require('joi')

const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),
})

const patientSchema = Joi.object({
    firstName: Joi.string().alphanum().min(2).max(24).required(),
    middleName: Joi.string().alphanum().min(2).max(24),
    lastName: Joi.string().alphanum().min(2).max(24).required(),
    BirthDate: Joi.date().required(),
    MaritalStatus: Joi.string().pattern(new RegExp('^\bSingle|Married\b$')),
    Nationality: Joi.string().pattern(new RegExp('^\bMorocco|France\b$')),
    PhoneNumber: Joi.number().min(8).max(15),
    BloodType: Joi.string().valid('AB+', 'A+', 'B+', 'O+', 'AB-', 'A-', 'B-', 'O-'),
    Vaccinated: Joi.boolean().required(),
    VaccinationDate: Joi.date(),
    MedicalAntecedents: Joi.array().items(Joi.string())
})

module.exports = { registerSchema, patientSchema }




/* BloodType: Joi.string().pattern(new RegExp('^\bAB+|A+|B+|O+|AB-|A-|B-|O-\b$')), */