const express = require('express')
const app = express()
var patient = require('./routes/patient')
var user = require('./routes/user')
var Test = require('./model/Test')
const mongoose = require("mongoose")

require("dotenv").config();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// ...
app.use('/patient', patient)
app.use('/user', user)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/create', async (req, res) => {
    const test = new Test({
        name: 'rwieruch',
        something: 'some other test'
    });

    await test.save();

    res.send({ message: 'test created successfully' })
})

app.listen(process.env.PORT, () => console.log("Server is running on " + process.env.PORT));
