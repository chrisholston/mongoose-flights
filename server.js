// require our modules
const express = require('express');
const morgan = require ('morgan');
const methodOverride = require('method-override');
const mongoose = require ('mongoose');

// create the express app
const app = express();
// configure server settings
app.set('view engine', 'ejs');

// mount middleware
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));

// TODO  mount routes


const port = 3000; // todo - configure for running on the cloud
// tell the app to listen
app.listen(3000, function() {
    console.log(`Express is listening on ${port}`)
});