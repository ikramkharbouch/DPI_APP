const express = require('express')
const app = express()
var patient = require('./routes/patient')
var user = require('./routes/user')
var appointment = require('./routes/appointment')
var Test = require('./model/Test')
var cors = require('cors')
const mongoose = require("mongoose")

require("dotenv").config();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

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
app.use('/appointment', appointment)

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
