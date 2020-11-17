// require the model (optional)

// set up our module.exports so we can export functionality
module.exports = {
    index
};

// define our controller actions (functions) AKA router middleware

function index(req, res) {
    res.render('index');
}