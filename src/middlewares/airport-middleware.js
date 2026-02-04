const { StatusCodes } = require("http-status-codes")
const AppError = require("../utils/error/app-error")
const { errorResponse } = require("../utils/common")





const validateCreateRequest = (req , res , next) =>{
     console.log(req.body);
     

    if(!req.body.name){
        errorResponse.message = "Error occured"
        errorResponse.error =  new AppError("Please provide the correct name for the airport" , StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if (!req.body.code) {
      errorResponse.message = "Error occured";
      errorResponse.error = new AppError(
        "Please provide the correct code for the airport",
        StatusCodes.BAD_REQUEST,
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.cityId) {
      errorResponse.message = "Error occured";
      errorResponse.error = new AppError(
        "Please provide the correct cityId for the airport",
        StatusCodes.BAD_REQUEST,
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next() ; 
}

module.exports = {
    validateCreateRequest 
}