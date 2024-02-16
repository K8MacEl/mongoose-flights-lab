var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')

//get requests to  /movies/new
router.get('/new', flightCtrl.newFlightForm)
//Post request to /movies
router.post('/', flightCtrl.create)

module.exports = router;
