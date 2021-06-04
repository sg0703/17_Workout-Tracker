const mongoose = require('mongoose');
const Workout = require('../models/Workout.js');

const testData =  new Workout ({
    "day": "3-7-1991",
    "exercises": [
        "Biceps","Curls"
    ]
});

  testData.save((err, res) => {
      if(err) return console.log(err);

      console.log(res);
  })

