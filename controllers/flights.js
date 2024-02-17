// import our model so we can talk to the database and perfomr
// our CRUD operations
const FlightModel = require('../models/flight')

//---------------FLIGHT DEFAULTS COMMENTED OUT NEED TA HELP HERE--------------//


module.exports = {
	newFlightForm: newFlight,
	create,
    index
}
async function index(req, res){
    //want to send an ejs page will all the flights to browser
    try {
        //we want our model to go to teh date and get all the flights
        //the .find({}) is a mongoose model query method
        const flightDocumentsFromTheDB = await FlightModel.find({})
        console.log(flightDocumentsFromTheDB)
        //then we want to send an ejs page with all flights to the boswer
        //flights/index is lopoking in the views folder for the ejs page
        res.render('flights/index', {flightDocs: flightDocumentsFromTheDB})
    } catch(err){
        console.log(err)
        res.redirect('/')
    }
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
    const newFlight = new FlightModel();
    //obtain the default date
    const dt = newFlight.departs;
    //format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
}