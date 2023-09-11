const Customer = require("../models/Customer");

module.exports = {
  index: async (req, res) => {
    const customer = await Customer;
    const customerList = await customer.findAll({
      attributes: ["id", "name", "email", "status"],
      order: [
        ["id", "DESC"],
        ["name", "ASC"],
      ],
    });

    res.render("customers/index", { customerList });
  },
};
