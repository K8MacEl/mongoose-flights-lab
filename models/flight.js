// THE PURPOSE OF THIS FILE
// is to create and export our object Model (which we use in our controllers)
// The model performs cruds operations on the movies collection in our movies database!
const mongoose = require('mongoose')

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
    enum: ['AUS','DFW','DEN','LAX','SAN']
  },
  flightNo: 
  nowShowing: Boolean
}, {
  timestamps: true
});
	
// Compile the schema into a model and export it
// Movie, creates a movies collection in our movies database
module.exports = mongoose.model('Flight', flightSchema);