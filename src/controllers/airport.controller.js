const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");


// POST : /airport
const createAirport = async(req , res) => {
    try {
        console.log(req.body);
        
        const airport  = await AirportService.createAirport(
            {
                name : req.body.name , 
                code : req.body.code ,
                address : req.body.address , 
                cityId : req.body.cityId
            }
        ) 
        console.log(airport);
        
        successResponse.data =airport ; 
        successResponse.message = "Succesfully created the airport " ; 
        return res.status(StatusCodes.OK).json(successResponse)
    } catch (error) {
        errorResponse.message = " Error while creating the airport" ; 
        errorResponse.error = {explanation : error};
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse) 

    }
}

//GET req : airport/
const getAirports = async (req, res) => {
  try {
    const airports = await AirportService.getAirports();

    successResponse.data = airports;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = { explanation: error };
    return res.status(error.statusCode).json(errorResponse);
  }
};

//POST req : airport/:id
const getAirport = async (req,res)=>{
    try {
        const airport  = await AirportService.getAirport(req.params.id) ; 
        successResponse.data = airport ;
        return res.status(StatusCodes.OK).json(successResponse) ; 
    } catch (error) {
        
        errorResponse.error = {explanation : error} ; 
        return res.status(error.statusCode).json(errorResponse)
    }
}

//DELETE req : airplanes/:id
const destroyAirport = async (req,res)=>{
    try {
        const airport  = await AirportService.destroyAirport(req.params.id) ; 
        successResponse.data = airport ;
        return res.status(StatusCodes.OK).json(successResponse) ; 
    } catch (error) {
        
        errorResponse.error = {explanation : error} ; 
        return res.status(error.statusCode).json(errorResponse)
    }
}


module.exports = {
    createAirport , getAirport , getAirports , destroyAirport
}
