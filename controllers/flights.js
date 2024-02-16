// import our model so we can talk to the database and perfomr
// our CRUD operations
const Flight = require('../models/flight')

module.exports = {
	new: newFlight,
	create: create
	// or 
	// create
}

function create(req, res) {
    //converts required field of flight number to a boolean
    req.body.flightNumber = !! req.body.flightNumber;
    //remove any whitespacvce at start and end of cast
    req.body.cast = req.body.cast.trim();
    const flight = new Flight(req.body);
    flight.save(function(err) {
        //if we don't redirect, the new page will be shown
        //with /flights in the address bar
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        //for now, redirect right back to new.ejs
        res.redirect('/flights/new');

    });

}

function newFlight(req, res){

	// res.render looks in our 
	// views folder for the ejs page
	res.render('flights/new')
}