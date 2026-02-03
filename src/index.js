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

app.listen(serverConfig.PORT,()=>{
  console.log(`app listening at the port  : ${serverConfig.PORT}`);
})