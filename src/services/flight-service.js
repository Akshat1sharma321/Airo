const { StatusCodes } = require("http-status-codes");
const { FLightRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");
const {Op} = require('sequelize')

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
    let sortFilter = {} ;
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

    if(query.price){
        [minPrice , maxPrice] = query.price.split('-') ; 
        customFilter.price = {
            [Op.between] : [minPrice ,( maxPrice === undefined)  ? 200000 : maxPrice ]
        }
    }

    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }

    if(query.tripDate){
        const endTime = " 23:59:59"
        customFilter.departureTime = {
            [Op.between] : [query.tripDate , query.tripDate +endTime ]
        }
    }
    if(query.sort){
        const params = query.sort.split(',') ; 
        const sortFilters = params.map((params)=>params.split('_')) ;
        sortFilter =sortFilters 

    }
    try {
        const flight = await flightRepository.getAllFlights(customFilter , sortFilter) ; 
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