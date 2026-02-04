const { Router } = require("express") ; 

const router = Router() ; 

console.log("In airport Routes");


const {AirportController} =  require("../../controllers") ; 

const {airportMiddleware}  = require("../../middlewares") ; 

router.route("/").post(airportMiddleware.validateCreateRequest  , AirportController.createAirport ).get( AirportController.getAirports) ; 

router.route("/:id").get(AirportController.getAirport).delete(AirportController.destroyAirport) ; 
module.exports = router ; 

