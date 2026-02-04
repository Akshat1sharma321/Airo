const { Airport } = require("../models");
const CrudRepository = require("./crud-repositories.js");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
