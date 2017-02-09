const express = require('express');
const router = express.Router();
const displayPageController = require('../controllers/displayPagesController');


/* DISPLAY PAGES CALLS */

//home page 
router.route("/")
    .get(displayPageController.homePage);


module.exports = router;