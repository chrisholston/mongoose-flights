// require our modules - this requires installing mongoose, which is npm -i mongoose
const mongoose = require('mongoose');

// create a shortcut variable - this is an object that is created once a connection is established, and gives us information about the event. 
const db = mongoose.connection;

// connect to the database - this is a connect method, we will paste our connection URI and make sure to update our pw and db name. We will set up a configuration object since we're working with a cloudbased database. The 3 configurations we need to use when working with a cloud based database. These provide additional features that we will extend mongoose with in order to work more efficiently.
mongoose.connect('mongodb+srv://admin:1234@cluster0.wyypc.mongodb.net/mongoose-flights?retryWrites=true&w=majority',{
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
});

// listen for a connection event - we use a shortcut variable we set up. The connection event we are listening for is when we are connected. The listener will call back to a function to give us positive reinforcement that we're connected. We use string interpolation to get info about the host we're connected to as well as the port we're running off of. 

// we then will open our terminal and type node config/database.js to make sure we're connected successfully.
db.on('connected',function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
