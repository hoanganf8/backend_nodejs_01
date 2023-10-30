const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE, JWT_REFRESH_EXPIRE } = process.env;
module.exports = {
  createToken: (data) => {
    const token = jwt.sign(
      {
        data,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRE },
    );
    return token;
  },

  createRefresh: () => {
    const token = jwt.sign(
      {
        data: {
          number: Math.random() + new Date().getTime(),
        },
      },
      JWT_SECRET,
      { expiresIn: JWT_REFRESH_EXPIRE },
    );
    return token;
  },

  decode: (token) => {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);

      return decoded.data;
    } catch (e) {
      throw new Error(e.message);
    }
  },
};
