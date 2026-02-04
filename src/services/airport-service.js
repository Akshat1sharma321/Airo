const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");
const { addTicks } = require("sequelize/lib/utils");

const airportRepository = new AirportRepository();
const createAirport = async (data) => {
  try {
    console.log(data);

    const airport = await airportRepository.create(data);

    return airport;
  } catch (error) {
    console.log(error);
    if (error.name === "TypeError") {
      throw new AppError(
        "Cannot create the airport object ",
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }

    if (error.name === "ValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err);
      });
      console.log(`Explanation for the error is  : ${explanation}`);

      throw new AppError(
        "Cannot create the airport object ",
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

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw error;
  }
};

const getAirports = async () => {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    throw new AppError(
      "Cannot get the airports ",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};

const getAirport = async (id) => {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airport you are trying to foind is not there",
        error.statusCode,
      );
    }
    throw new AppError(
      "Cannot get the airplane ",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};

const destroyAirport = async (id) => {
  try {
    const airport = await airportRepository.destroy(id);
    return airport;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Cannot find the airport you want to delete",
        error.statusCode,
      );
    }
    throw new AppError(
      "Cannot get the airport ",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};

module.exports = { createAirport, getAirports, getAirport, destroyAirport};
