const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");

const cityRepository = new CityRepository() ; 

const CreateCity = async(data) => {
     
    try {
        console.log("Hello");
        console.log(data);
        
        
        const city  = await cityRepository.create(data) ;
        return city  ; 
    } catch (error) {
        console.log(error);
        if (error.name === "TypeError") {
          throw new AppError(
            "Cannot create the airplane object ",
            StatusCodes.INTERNAL_SERVER_ERROR,
          );
        }


        if (error.name === "SequelizeUniqueConstraintError") {
          let explanation = [];
          error.errors.forEach((err) => {
            explanation.push(err.message);
          });
          console.log(`Explanation for the error is  : ${explanation}`);

          throw new AppError(
            explanation,
            StatusCodes.BAD_REQUEST,
          );
        }
        if (error.name === "ValidationError") {
          let explanation = [];
          error.errors.forEach((err) => {
            explanation.push(err);
          });
          console.log(`Explanation for the error is  : ${explanation}`);

          throw new AppError(
            "Cannot create the airplane object ",
            StatusCodes.INTERNAL_SERVER_ERROR,
          );
        }

        if (error.name === "SequelizeValidationError") {
          let explanation = [];
          error.errors.forEach((err) => {
            explanation.push(err.message);
          });
          console.log(error);

          console.log(`Explanation for the error is  : ${explanation}`);

          throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw error; 
    }
}

module.exports = { 
    CreateCity
}