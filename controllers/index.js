// send traffic where it needs to go...
const router = require('express').Router();

// import route controllers
const frontEnd = require('./frontend.js');
const apiRoutes = require('./api/api-routes.js');

// define routes
router.use('/', frontEnd);
router.use('/api/', apiRoutes);

module.exports = router;