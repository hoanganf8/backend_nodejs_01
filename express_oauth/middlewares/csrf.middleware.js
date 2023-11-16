var Tokens = require("csrf");
const tokens = new Tokens();
var secret = tokens.secretSync();

module.exports = {
  verify: (req, res, next) => {
    if (req.method !== "GET") {
      var token = req.body._token;
      if (!tokens.verify(secret, token)) {
        throw new Error("invalid token!");
        return;
      }
    }

    next();
  },
  token: () => {
    return tokens.create(secret);
  },
};
