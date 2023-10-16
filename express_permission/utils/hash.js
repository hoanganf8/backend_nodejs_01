const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = {
  make: (password) => {
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
  },

  check: (password, hash) => {
    //Logic check hash
  },
};
