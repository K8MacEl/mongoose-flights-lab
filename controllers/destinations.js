const FlightModel = require('../models/flight')

module.exports = {
    create
}

async function create(req, res){
    //to find the flight
    try {
        //req.params.id comes from the http request from the reviews form on the fllights index page
        const flightDoc = await FlightModel.findById(req.params.id)
        //flightDocs is the flight from the database--CHECK ON THIS IF ERROR IS THROWN
        //then add the destination to the flight's array
        flightDoc.destinations.push(req.body);
        // Sort the destinations array
        flightDoc.destinations.sort({arrival: 1});

        //to the destinations array
        //since we are changing the flightDocs we have to tell the database
        await flightDoc.save() //this tells the db we need to add the destination
        //then respond to the client
        res.redirect(`/flights/${req.params.id}`)
    } catch(err){
        console.log(err)
        res.send(err)
    }
}


