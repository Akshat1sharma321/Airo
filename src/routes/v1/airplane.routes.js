const { Router } = require("express");
const { AirplaneController } = require("../../controllers");
const { airplaneMiddleware } = require("../../middlewares");

const router = Router() 

console.log("in airplane");


router.route('/').post(airplaneMiddleware.validateCreateRequest , AirplaneController)

module.exports = router
 