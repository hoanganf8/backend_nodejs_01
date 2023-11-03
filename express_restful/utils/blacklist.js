const model = require("../models/index");
const jwt = require("./jwt");
const Blacklist = model.Blacklist;
module.exports = {
  remove: async () => {
    const blacklist = await Blacklist.findAll({
      order: [["id", "desc"]],
    });
    if (blacklist) {
      blacklist.forEach((item) => {
        try {
          jwt.decode(item.token);
        } catch (e) {
          item.destroy();
        }
      });
    }
  },
};
