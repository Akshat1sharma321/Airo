const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

const createAirplane = async(req,res)=>{
    try {
        console.log("In ac");

        console.log(AirplaneService);
        
        
        console.log(req.body);
        
        const {modelNumber , capacity} = req.body ; 

        const airplane  =  await AirplaneService.createAirplane({
            modelNumber , capacity
        })

        return res.status(StatusCodes.CREATED).json({
            success : true , 
            msg : "Successfully created the airplane " , 
            data :  airplane , 
            error : {}
        })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          success: false ,
          msg: "error ",
          data: null,
          error: error,
        });
    }
}

// module.exports = createAirplane

module.exports = createAirplane 

