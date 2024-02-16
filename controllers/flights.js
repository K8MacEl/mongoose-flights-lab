// import our model so we can talk to the database and perfomr
// our CRUD operations
const FlightModel = require('../models/flight')
//---------------FLIGHT DEFAULTS COMMENTED OUT NEED TA HELP HERE--------------//
// const newFlight = new FlightModel();
// //obtain the default date
// const db = newFligh.departs;
// //format the date for the value attribute of the input
// let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
// departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
// res.render('flights/new', { departsDate });
module.exports = {
	newFlightForm: newFlight,
	create
}
async function create(req, res) {
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