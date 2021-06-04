const router = require('express').Router();

// import route controllers
const frontend = require('./frontend.js');
//const apiRoutes = require('./api/');

// define routes
router.use('/', frontend);
//router.use('/api', apiRoutes);

module.exports = router;