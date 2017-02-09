const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');


/* API CALLS */

// call method airportDetailController.search to search for Airports 
router.route("/event/:event")
    .post(eventController.search);


module.exports = router;