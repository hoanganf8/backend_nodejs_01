//Import model
const model = require("../models/index");
//Import BaseRepository
const BaseRepository = require("../repositories/base.repository");
class UserRepository extends BaseRepository {
  constructor() {
    this.setModel(model.User);
  }

  addUser(data) {
    //Thao tác với hàm create
  }
}

module.exports = new UserRepository();
