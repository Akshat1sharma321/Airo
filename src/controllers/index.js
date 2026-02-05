const createAirplane = require("./airplane.controller.js");
const { infoController } = require("./info-controller.controller.js");
module.exports = {
    infoController ,
    AirplaneController : createAirplane , 
    CityController : require("./city.controller.js") , 
    AirportController : require("./airport.controller.js") , 
    FlightControler : require("./flight.controller.js")
}