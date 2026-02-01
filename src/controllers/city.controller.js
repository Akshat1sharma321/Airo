const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { successResponse } = require("../utils/common");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

//POST req : city/;
//req-body : {name : 'London'}

const createCity = async (req, res) => {
  try {
    console.log("In city");

    console.log(CityService);

    console.log(req.body);

    const { name } = req.body;

    const City = await CityService.CreateCity({
      name
    });
    successResponse.message = "Successfully created the city ";
    successResponse.data = City;
    return res.status(StatusCodes.CREATED).json(successResponse);
    // return res.status(StatusCodes.CREATED).json({
    //     success : true ,
    //     msg : "Successfully created the airplane " ,
    //     data :  airplane ,
    //     error : {}
    // })
  } catch (error) {
    errorResponse.message = "Error while creating the City";
    errorResponse.error = { explanation: error };
    // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    return res.status(error.statusCode).json(errorResponse);
  }
};

module.exports = {
    createCity
}

