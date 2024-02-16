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
    type: String,
    enum: ['American', 'Southwest', 'United', 'Delta']
  },
  airport: {
    type: String,
    //need to learn how to add DEN as a default
    enum: ['AUS','DFW','DEN','LAX','SAN']
  },
  flightNo: {
  type: Number,
  min: 10,
  max: 9999,
  require: true
  },
  //how to add default one year from today 
  departs: {
    type: Date,
},
// {
//     timestamps: true
// }
})

// Compile the schema into a model and export it
// Movie, creates a movies collection in our movies database
module.exports = mongoose.model('Flight', flightSchema);