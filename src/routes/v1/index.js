const { Router } = require("express");
const { infoController } = require("../../controllers");

const airplaneRoutes =  require("./airplane.routes.js")

const cityRoutes = require("./city.routes.js")

console.log("in v1");


const router = Router() 

router.route('/info').get(infoController)

router.use('/airplanes',airplaneRoutes)

router.use('/cities' , cityRoutes) ; 

module.exports = router ; 