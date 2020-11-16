// THESE ARE THE STEPS TO SETTING UP A MODEL, ITS THE SAME EVERY TIME.

// require our modules
const mongoose = require('mongoose');

// set up our shortcut variable
const Schema = mongoose.Schema;

//initialize our flightSchema- we will set up an options object  so we can enable timestamps. This way we get a created at and updated at option in our documents. We then define the various properties to our Schema. The enum validator will numerate over an array of strings and ensure that the data matches these values. If it doesn't match the value then it rejects it. 
const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            // create a date object 
            const date = new Date();
            // create a variable representing the current year
            const year = date.getFullYear();
            // set the current year of the current date object to be the current year plus one 
            date.setFullYear(year + 1);
            //return the result
        return date;
        }
    }
}, { timestamps: true });

// export the compilation of the schema into a model - the way we do that is with module.exports and assign it to the result of mongoose.model and pass in the name we want to give our collection which is 'Flight", then we put our second argument as flightSchema.  These are the only two pieces of information that Mongo needs to create a model from this flight schema. This will create a model from this Flight Schema into MongoDB. 
module.exports = mongoose.model('Flight', flightSchema);