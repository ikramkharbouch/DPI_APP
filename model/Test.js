var mongoose = require('mongoose');


var TestSchema = new mongoose.Schema({
    name: String,
    something: String
});

module.exports = mongoose.model('Test', TestSchema);