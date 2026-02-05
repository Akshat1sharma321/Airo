const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

const createFlight = async(req, res) =>{
    try {
        const {flightNumber , airplaneId , arrivalAirportId , departureAirportId , arrivalTime , departureTime , price , boardingGate , totalSeats } = req.body ; 
        const flight = await FlightService.createFlight({
            flightNumber , airplaneId ,arrivalAirportId ,departureAirportId ,arrivalTime ,departureTime ,price ,boardingGate , totalSeats
        })
        successResponse.message = "Successfully created the flight" ; 
        successResponse.data = flight ; 
        console.log(flight);
        return res.status(StatusCodes.OK).json(successResponse) ; 
    } catch (error) {
        errorResponse.message = "cannot create the flight" ;
        errorResponse.data = new AppError(error , StatusCodes.BAD_REQUEST) ; 
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }

}

const getAllFLights = async (req , res) => {
    try {
        const flight = await FlightService.getAllFlights(req.query)
         successResponse.message = "Successfully found the flight";
         successResponse.data = flight;
        //  console.log(flight);
         return res.status(StatusCodes.OK).json(successResponse); 
    } catch (error) {
       errorResponse.message = "cannot find the flights ";
       errorResponse.data = new AppError(error, StatusCodes.BAD_REQUEST);
       return res.status(StatusCodes.BAD_REQUEST).json(errorResponse); 
    }
}

module.exports = {
    createFlight , 
    getAllFLights
}