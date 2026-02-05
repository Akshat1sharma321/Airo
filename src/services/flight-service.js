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

const getAllFlights = async(query) =>{
    let customFilter = {} ; 
    if(query.trips){
        [departureAirportId , arrivalAirportId ] = query.trips.split('-')
        customFilter.departureAirportId = departureAirportId  ; 
        customFilter.arrivalAirportId = arrivalAirportId
        if(arrivalAirportId === departureAirportId){
            throw new AppError("Arrival and Departure city cannot be same " , StatusCodes.BAD_REQUEST) ;
        }
        console.log(`Custom Filter ${customFilter}`);
        console.log(customFilter);
        
        
    }

    try {
        const flight = await flightRepository.getAllFlights(customFilter) ; 
        return flight
    } catch (error) {
           throw new AppError(
             "Cannot fetch the data of all the flights",
             StatusCodes.INTERNAL_SERVER_ERROR,
           ); 
    }
}

module.exports = {
    createFlight , getAllFlights
}