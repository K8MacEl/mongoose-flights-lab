var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')

//GET request to /movies
router.get('/', flightCtrl.index)

//get requests to  /movies/new
router.get('/new', flightCtrl.newFlightForm)
//Post request to /movies
router.post('/', flightCtrl.create)

router.get('/:id', flightCtrl.show)

module.exports = router;
