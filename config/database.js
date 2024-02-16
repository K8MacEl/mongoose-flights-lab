// THE PURPOSE OF THIS FILE
// is to establish a connection between our express server
// and our database on mongodb atlas! 

//monggoose is the module that allows us to creat that connection
//this is where we connect to a database named movies
const mongoose = require('mongoose');

//this connects to mongodb atlasm using our environemtn varibale
//process.env.VARIABLE_NAME is how you access the environemnt variable values
mongoose.connect(process.env.DATABASE_URL);

//shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function(){
    //this function runs when we est a connection between our express server and mongodb
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
