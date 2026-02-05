const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/error/app-error");
const { errorResponse } = require("../utils/common");
const { dateTime } = require("../utils/helper");

const validateCreateRequest = (req, res, next) => {
  console.log(req.body);

  if (!req.body.flightNumber) {
    errorResponse.message = "Error occured";
    errorResponse.error = new AppError(
      "Please provide the correct flightNumber for the airport",
      StatusCodes.BAD_REQUEST,
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.arrivalAirportId) {
    errorResponse.message = "Error occured";
    errorResponse.error = new AppError(
      "Please provide the correct arrivalAirportId for the airport",
      StatusCodes.BAD_REQUEST,
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.departureAirportId) {
    errorResponse.message = "Error occured";
    errorResponse.error = new AppError(
      "Please provide the correct departureAirportId for the airport",
      StatusCodes.BAD_REQUEST,
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.airplaneId) {
    errorResponse.message = "Error occured";
    errorResponse.error = new AppError(
      "Please provide the correct airplaneId for the airport",
      StatusCodes.BAD_REQUEST,
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.arrivalTime) {
    errorResponse.message = "Error occured";
    errorResponse.error = new AppError(
      "Please provide the correct arrivalTime for the airport",
      StatusCodes.BAD_REQUEST,
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }if (!req.body.departureTime) {
    errorResponse.message = "Error occured";
    errorResponse.error = new AppError(
      "Please provide the correct departureTime for the airport",
      StatusCodes.BAD_REQUEST,
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!dateTime.timeValid(req.body.departureTime,req.body.arrivalTime)) {
    errorResponse.message = "Error occured";
    errorResponse.error = new AppError(
      "Please provide the correct departureTime as it must be less  than  arrival time for the airport",
      StatusCodes.BAD_REQUEST,
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
 
  
  
  
  
  if (!req.body.price) {
    errorResponse.message = "Error occured";
    errorResponse.error = new AppError(
      "Please provide the correct price for the airport",
      StatusCodes.BAD_REQUEST,
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }if (!req.body.totalSeats) {
    errorResponse.message = "Error occured";
    errorResponse.error = new AppError(
      "Please provide the correct totalSeats for the airport",
      StatusCodes.BAD_REQUEST,
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
};
