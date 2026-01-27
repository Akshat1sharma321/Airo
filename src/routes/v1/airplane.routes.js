const { Router } = require("express");
const { AirplaneController } = require("../../controllers");

const router = Router() 

console.log("in airplane");


router.route('/').post(AirplaneController)

module.exports = router
 