const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");



const validateCreateRequest = (req , res , next) =>{
    if(!req.body.modelNumber){
        errorResponse.message = "error occured  " 
        errorResponse.error = new AppError(["Validating error modelNumber not entered correctly"], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next()
}

module.exports = {
    validateCreateRequest
}