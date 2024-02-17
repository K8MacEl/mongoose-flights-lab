// THE PURPOSE OF THIS FILE
// is to create and export our object Model (which we use in our controllers)
// The model performs cruds operations on the movies collection in our movies database!
const mongoose = require('mongoose')
//optional shortcut to mongoose.Shema class
const Schema = mongoose.Schema;

// Enforces the shape of the documents (Think of objects)
// in our mongodb movies collection
const flightSchema = new Schema({
  airline: {
    type: String
  },
  airport: {
    type: String,
    default: 'DEN' //default set to DEN but need help here and I think on controllers to make this work
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    //default should be one year from today but is pulling as null I think the issue is in controllers
    default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  }
}
    
);

// Compile the schema into a model and export it
// Flight, creates a flights collection in our flights database
module.exports = mongoose.model('Flight', flightSchema);