const express = require("express"); 

const apiRoutes= require("./routes/index.js");

const {serverConfig, logger} = require("./config");


const app = express() 
 

app.use(express.json({ limit: "16kb" }));

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);

app.use("/api" , apiRoutes) ; 

app.listen(serverConfig.PORT,async ()=>{
  console.log(`app listening at the port  : ${serverConfig.PORT}`);
  // logger.info("Successfully started " , {})

  const  { City , Airport} = require('./models') ;
  const city  = await City.findByPk(1) ;
  // console.log(city);
  // const airport = await Airport.create({
  //   name: 'Kempegowda Airport' ,
  //   code : 'BLR' ,
  //   cityId : 1
  // })
  // const newBlr = await city.createAirport({
  //   name: 'New Bengaluru Airport' ,
  //   code : 'NBR' ,
  // })
  // console.log(newBlr)
  // const airportsinBlr = await city.getAirports() ; 
  // console.log(airportsinBlr);
  
})