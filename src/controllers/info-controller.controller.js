const { StatusCodes } = require("http-status-codes");

const infoController = (req, res) => {
  console.log("Hello");

  return res.status(StatusCodes.BAD_GATEWAY).json({ msg: "ok" });
};

module.exports = {
    infoController
}