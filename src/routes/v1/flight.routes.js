const { Router } = require('express') ;
const { flightMiddleware } = require('../../middlewares');
const { FlightControler } = require('../../controllers');

const router = Router() ; 

router.route('/').post(flightMiddleware.validateCreateRequest , FlightControler.createFlight) ;

module.exports = router ; 