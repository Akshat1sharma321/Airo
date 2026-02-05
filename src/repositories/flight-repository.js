const { Flight } = require('../models')
const CrudRepository = require('./crud-repositories')

class flightRepository extends CrudRepository {
constructor(){
    super(Flight)
}
}

module.exports = flightRepository ; 