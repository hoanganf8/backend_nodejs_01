const model = require("../models/index");
const Customer = model.Customer;

module.exports = {
  index: async (req, res) => {
    const customers = await Customer.findAll();
    console.log(customers);
    res.send(`Hello F8`);
  },
};
