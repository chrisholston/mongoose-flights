// the purpose of a router is to map HTTP requests to controller code

// require our modules
const express = require('express');

// create the router object
const router = express.Router();

// require the controller module to map requests to
const indexCtrl = require('../controllers/index');

// define our routes

// GET "/" -> give me the homepage

router.get('/', indexCtrl.index);

// export our router object
module.exports = router;