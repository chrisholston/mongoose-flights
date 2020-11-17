// The purpose of a router is to map "routes" HTTP requests to controller code

// require your module (express)
const express = require('express');

// create a router object
const router = express.Router(); 

// require the flight controller
const flightsCtrl = require('../controllers/flights');

// we are already at "/flights"

// define your route for GET '/new`
router.get('/new', flightsCtrl.new);

// define the route for creating a movie POST '/'
router.post('/', flightsCtrl.create);

// define the route to display a list of flights
router.get('/', flightsCtrl.index);

// export your router object
module.exports = router;