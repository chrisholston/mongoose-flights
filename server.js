// require our modules -
//1. create a variable called express and assign it to the result of requiring express.
//ALSO MAKE SURE YOU INSTALL ALL DEPENDENCIES
const express = require('express');
const morgan = require ('morgan');
const methodOverride = require('method-override');
const port = 3000; 

// Require router modules
const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');

// create the express app - we just call express like a function
const app = express();

// Connect to the DB
require('./config/database');

// configure server settings- this is for our view engine. Make sure to install this as well.
app.set('view engine', 'ejs');

// mount middleware
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));

 //mount routes

app.use('/', indexRouter);
app.use('/flights', flightsRouter);
// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on ${port}`)
});