const { StatusCodes } = require("http-status-codes");
const { FLightRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");


const flightRepository = new FLightRepository() ; 

const createFlight  = async (data) =>{
try {
    const flight = flightRepository.create(data) ; 
    return flight ; 
} catch (error) {
    throw new AppError("Cannot create the flight" , StatusCodes.INTERNAL_SERVER_ERROR)
}
}

module.exports = {
    createFlight 
}