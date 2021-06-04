const router = require('express').Router();
// import path
const path = require('path');

// deliver exercise.html for /exercise
router.get('/exercise', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// deliver stats.html for /stats
router.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// if ANYTHING else, show user index.html
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;