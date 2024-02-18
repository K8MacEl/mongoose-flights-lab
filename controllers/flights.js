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
        //WHY IS THE SORT DOING SOMETHING BUT IS NOT SORTING BY DATE?
        const flightDocumentsFromTheDB = await FlightModel.find({}).sort({departs: 1});
        //console.log(flightDocumentsFromTheDB)
        //use map method to loop through flight documentsfromthedb for each document we can add a 
        //property that determines the the color of the tb
        const modifiedFlights = flightDocumentsFromTheDB.map(function(flight){  
            const todaysDate = new Date() 
            //departs
            //return 
            //console.log(todaysDate)
            const isPassed = flight.departs < todaysDate;
            //using spread operator to copy the flight object
            //when we copy the flight doc nesting is occuring so properties are in an _doc property
            //adding isPassed to the object
            return {...flight._doc, isPassed}
            
        })
        console.log(modifiedFlights)
        //then we want to send an ejs page with all flights to the boswer
        //flights/index is looking in the views folder for the ejs page
        res.render('flights/index', {flightDocs: modifiedFlights});
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