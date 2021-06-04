const router = require('express').Router();
const Workout = require('../../models/Workout');

router.post('/workouts', (req,res) => {
    let newWorkout = new Workout(req.body);

    newWorkout.save((err,workout) => {
        if(err) return res.json(err);

        console.log(`Workout from ${workout.day} added!`);
        res.json(workout);
    });
});

router.get('/workouts', async (req,res) => {
    const workouts = await Workout.find({});

    res.json(workouts);
});

router.get('/workouts/range', async (req,res) => {
    const workouts = await Workout.find({});

    res.json(workouts);
});

module.exports = router;