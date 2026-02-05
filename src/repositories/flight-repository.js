const { where } = require('sequelize');
const { Flight } = require('../models')
const CrudRepository = require('./crud-repositories')

class flightRepository extends CrudRepository {
constructor(){
    super(Flight)
}
async getAllFlights(filters){
    console.log(filters);
    
    const response = await Flight.findAll({
        where : filters
    }) ; 
    return response  ; 
}
}

module.exports = flightRepository ; 