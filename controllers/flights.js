// import our model so we can talk to the database and perfomr
// our CRUD operations
// const Flight = require('../models/flight');
// const newFlight = new Flight ();
// //default date obtained
// const dt = newFlight.departs
// let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
// departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
// res.render('flights/new', { departsDate });
const FlightModel = require('../models/flight')

module.exports = {
	newFlightForm: newFlight,
	create
	// or 
	// create
}

async function create(req, res) {
    //wORK ON THIS SECTION
 try {
    const createdFlightDoc = await FlightModel.create(req.body);
    console.log(createdFlightDoc)
    //for now redirect to new page
    res.redirect('/flights/new')
 } catch(err){
    console.log(err)
    res.redirect('/flights/new')
    }
}

function newFlight(req, res){ 
    res.render('flights/new')
}