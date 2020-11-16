// require our modules
const mongoose = require('mongoose');

// set up our shortcut variable
const Schema = mongoose.Schema;
//initialize our flightSchema
const moflightSchema = new Schema ({
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

// export the compilation of the schema into a model
module.exports = mongoose.model('Flight', flightSchema);