const { StatusCodes } = require("http-status-codes");
const { logger } = require("../config");
const AppError = require("../utils/error/app-error");

class CrudRepository {
  constructor(model) {
    this.model = model;
    console.log(model);
  }


  async create(data) {
    // try {
        console.log(this);
        
        console.log(data);
        
      const response = await this.model.create(data);
      return response;
    // } catch (error) {
    //   logger.error(`Something went wrong in crud repo : create ${error}`);
    //   throw error;
    // }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      if(response === 0){
        throw new AppError('Cannot delete the data you want to delete' , StatusCodes.NOT_FOUND)
      }
      return response;
    } catch (error) {
      logger.error(`Something went wrong in crud repo : create`);
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      if(!response){
        throw new AppError('Cannot find the data' , StatusCodes.NOT_FOUND)
      }
      return response;
    } catch (error) {
      logger.error(`Something went wrong in crud repo : get`);
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error(`Something went wrong in crud repo : get`);
      throw error;
    }
  }

  async update(id , data) {
    try {
      const response = await this.model.update(data , {
        where : {
            id : id
        }
      });
      return response;
    } catch (error) {
      logger.error(`Something went wrong in crud repo : get`);
      throw error;
    }
  }
}

module.exports = CrudRepository ; 