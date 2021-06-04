const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Workout = require('./models/Workout');

// set up port
const PORT = process.env.PORT || 3000

// initialize server
const app = express();

// make sure we can use JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make public folder static 
app.use(express.static('public'));

// send all traffic to controllers files to route it appropriately
app.use(require('./controllers/'));

// try connecting to DB, if it succeeds start server, else display error message

mongoose
    .connect(process.env.WORKOUT_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
    .then(() => {
        console.log('Connected to MONGO')

        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}!`);
        })
    })
    .catch((err) => {
        console.log(err);
    });
