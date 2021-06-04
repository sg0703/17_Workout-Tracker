const router = require('express').Router();
const Workout = require('../../models/Workout');

router.post('/workouts', (req,res) => {
    console.log(req.body);
});

router.get('/workouts', async (req,res) => {
    const workouts = await Workout.find({});

    res.json(workouts);
});

module.exports = router;