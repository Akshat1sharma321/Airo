const { where } = require('sequelize');
const { Flight } = require('../models')
const CrudRepository = require('./crud-repositories')

class flightRepository extends CrudRepository {
constructor(){
    super(Flight)
}
async getAllFlights(filters , sort){
    console.log(filters);
    
    const response = await Flight.findAll({
        where : filters , 
        order : sort
    }) ; 
    return response  ; 
}
}

module.exports = flightRepository ; 