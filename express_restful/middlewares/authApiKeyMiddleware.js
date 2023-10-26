const model = require("../models/index");
const ApiKey = model.ApiKey;
module.exports = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  const authCheck = await ApiKey.findOne({
    where: {
      value: apiKey ?? "",
    },
  });
  if (!authCheck) {
    res.status(401).json({
      status: "error",
      message: "Unauthorize",
    });
    return;
  }

  next();
};
