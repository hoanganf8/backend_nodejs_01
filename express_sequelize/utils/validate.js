module.exports = {
  getError: (errors, field) => {
    const error = errors.find(({ path }) => path === field);

    if (error) {
      return error.msg;
    }
  },
};
