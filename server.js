// require our modules -
//1. create a variable called express and assign it to the result of requiring express.

//ALSO MAKE SURE YOU INSTALL ALL DEPENDENCIES
const express = require('express');
const morgan = require ('morgan');
const methodOverride = require('method-override');
const mongoose = require ('mongoose');

// create the express app - we just call express like a function
const app = express();

// configure server settings- this is for our view engine. Make sure to install this as well.
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