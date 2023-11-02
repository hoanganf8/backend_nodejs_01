//Cần xử lý: Đẩy job vào Database
/*
- Data của queue: {name, email}
- Tên queue -> SendMail
*/
const { v4: uuid } = require("uuid");
const model = require("../models/index");
const QueueJob = model.QueueJob;
class Event {
  constructor() {
    this.data = null;
  }

  dispatch = (instance) => {
    this.data = instance;
    this.store();
  };

  store = async () => {
    //Lưu thông tin vào database
    const data = await QueueJob.create({
      key: uuid(),
      value: JSON.stringify({
        data: this.data.data,
        name: this.data.constructor.name,
      }),
    });
    if (data) {
      console.log(`Add queue success`);
      return;
    }
    console.log("Add queue failed");
  };
}

module.exports = Event;
