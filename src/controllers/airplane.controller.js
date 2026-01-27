const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { successResponse } = require("../utils/common");
const {errorResponse}  = require("../utils/common")

const createAirplane = async(req,res)=>{
    try {
        console.log("In ac");

        console.log(AirplaneService);
        
        
        console.log(req.body);
        
        const {modelNumber , capacity} = req.body ; 

        const airplane  =  await AirplaneService.createAirplane({
            modelNumber , capacity
        })
        successResponse.message = "Successfully created the airplane ";
        successResponse.data = airplane ;
         return res.status(StatusCodes.CREATED).json(successResponse)
        // return res.status(StatusCodes.CREATED).json({
        //     success : true , 
        //     msg : "Successfully created the airplane " , 
        //     data :  airplane , 
        //     error : {}
        // })

    } catch (error) {

        errorResponse.message = "Error while creating the airplane" ; 
        errorResponse.error = {explanation : error}
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        return res
          .status(error.statusCode)
          .json(errorResponse);
    }
}

// module.exports = createAirplane

module.exports = createAirplane 

