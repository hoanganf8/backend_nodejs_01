//Cần xử lý: Đẩy job vào Database
/*
- Data của queue: {name, email}
- Tên queue -> SendMail
*/
const { v4: uuid } = require("uuid");
const model = require("../models/index");
const QueueJob = model.QueueJob;
class Event {
  constructor(job) {
    this.job = job;
    this.store();
  }

  store = async () => {
    //Lưu thông tin vào database
    const job = await QueueJob.create({
      key: uuid(),
      value: JSON.stringify({
        data: this.job,
        name: this.job.constructor.name,
      }),
    });
    console.log(job);
  };
}

module.exports = Event;
