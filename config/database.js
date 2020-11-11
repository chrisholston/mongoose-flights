// require our modules 
const mongoose = require ('mongoose');

// create a shortcut variable
const db = mongoose.connection;

// connect to the database
mongoose.connect('mongodb+srv://admin:1234@cluster0.wyypc.mongodb.net/mongoose-flights?retryWrites=true&w=majority',{
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
});
// listen for a connection event
db.on('connected',function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
