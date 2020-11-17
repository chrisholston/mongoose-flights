// require the model
const Flight = require('../models/flight');


// set up module.exports and export your new action
module.exports = {
    new: newFlight,
    create,
    index
};


// define the new action (controller function)

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {

    console.log("create is working")

    const flight = new Flight(req.body);

    flight.save(function(err) {
        console.log(flight)
        // after flight is created, we will redirect
        res.redirect('/flights');
    });
}


function index(req, res) {
    // query the model (database) for all the flights
    Flight.find({}, function(err, flights) {
        // render a template to show all the movies
        res.render('flights/index', { flights })
    });
}