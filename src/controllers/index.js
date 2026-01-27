const createAirplane = require("./airplane.controller.js");
const { infoController } = require("./info-controller.controller.js");
module.exports = {
    infoController ,
    AirplaneController : createAirplane
}