//authentication
const Base = require("../core/Base");
const Session = require("../core/Session");

class Auth extends Base {
  login = (req, res) => {
    const session = new Session(req, res);
    // session.put("username", "hoangan");
    // session.put("email", "hoangan.web@gmail.com");
    // console.log(session.get("email"));
    res.end("Login");
  };
}

module.exports = new Auth();
