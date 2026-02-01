const { Router } = require("express");
const { CityController } = require("../../controllers");
const { cityMiddleware } = require("../../middlewares");

// api/c1/city POST
const router = Router() ; 

console.log("In citites");

router.route('/').post(  cityMiddleware.validateCreateRequest,CityController.createCity) ; 

module.exports = router ; 