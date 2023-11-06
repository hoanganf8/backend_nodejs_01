class BaseRepository {
  constructor() {
    this.model = null;
  }
  setModel(model) {
    this.model = model;
  }
  findAll() {
    //Sử dụng this.model
  }
  findOne() {}
  create() {}
  update() {}
  destroy() {}
}

module.exports = BaseRepository;
