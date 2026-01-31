const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");

const airplaneRepository = new AirplaneRepository() ; 
const createAirplane = async (data)=>{
    try {
        console.log(data);
        
        const airplane = await airplaneRepository.create(data) ; 

        return airplane
    } catch (error) {
        console.log(error);
        if(error.name === "TypeError"){
            throw new AppError("Cannot create the airplane object " , StatusCodes.INTERNAL_SERVER_ERROR)
        }

        if(error.name === "ValidationError"){
            let explanation = []  ; 
            error.errors.forEach((err)=>{
                explanation.push(err)
            }) ; 
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

          throw new AppError(
            explanation,
            StatusCodes.BAD_REQUEST,
          );
        }
        throw error ; 
    }


}

const getAirplane = async ()=>{
  try {
    const airplanes  = await airplaneRepository.getAll() ; 
    return airplanes ; 
  } catch (error) {
    throw new AppError('Cannot get the airplanes ' , StatusCodes.INTERNAL_SERVER_ERROR) ; 
  }
}

module.exports  ={ createAirplane , getAirplane}