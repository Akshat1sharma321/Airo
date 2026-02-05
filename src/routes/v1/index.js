const { Router } = require("express");
const { infoController } = require("../../controllers");

const airplaneRoutes =  require("./airplane.routes.js")

const cityRoutes = require("./city.routes.js")

const airportRoutes = require("./airport.routes.js")

const flightRoutes = require("./flight.routes.js" );

console.log("in v1");


const router = Router() 

router.route('/info').get(infoController)

router.use('/airplanes',airplaneRoutes)

router.use('/cities' , cityRoutes) ; 

router.use('/airport', airportRoutes) ; 

router.use('/flight', flightRoutes) ; 

module.exports = router ; 