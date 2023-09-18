module.exports = {
  getPaginateUrl: (req, page) => {
    const query = req.query;
    query.page = page;

    return new URLSearchParams(query).toString();
  },
};
