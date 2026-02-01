const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");
const { addTicks } = require("sequelize/lib/utils");

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

const getAirplanes = async ()=>{
  try {
    const airplanes  = await airplaneRepository.getAll() ; 
    return airplanes ; 
  } catch (error) {
    throw new AppError('Cannot get the airplanes ' , StatusCodes.INTERNAL_SERVER_ERROR) ; 
  }
}

const getAirplane  = async(id) =>{
  try {
    const airplane  =  await airplaneRepository.get(id) ; 
    return airplane ; 
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you are trying to foind is not there",
        error.statusCode,
      );
    }
    throw new AppError('Cannot get the airplane ' , StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

const destroyAirplane = async (id) => {
  try {
    const airplanes = await airplaneRepository.destroy(id);
    return airplanes;
  } catch (error) {
    if(error.statusCode === StatusCodes.NOT_FOUND){
      throw new AppError('Cannot find the airplane you want to delete' , error.statusCode)
    }
    throw new AppError(
      "Cannot get the airplanes ",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};

module.exports  ={ createAirplane , getAirplanes , getAirplane , destroyAirplane}