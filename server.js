const express = require("express");
const mongoose = require("mongoose");

// set up port
const PORT = process.env.PORT || 3000

// initialize server
const app = express();

// make sure we can use JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make public folder static 
app.use(express.static("public"));

// connect to pre-configured routes
app.use(require("./public/api.js"));

// try connecting to DB, if it succeeds start server, else display error message
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
        useNewUrlParser: true,
        useFindAndModify: false
        })
    .then(
        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}!`);
        })
    )
    .catch((err) => {
        console.log(err);
    });