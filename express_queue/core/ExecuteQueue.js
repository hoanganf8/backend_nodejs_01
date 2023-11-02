const path = require("path");
const model = require("../models/index");
const QueueJob = model.QueueJob;

const executeObj = {
  listen: async function () {
    const job = await QueueJob.findOne({
      order: [["id", "asc"]],
    });
    if (job) {
      const { data, name } = JSON.parse(job.value);
      const jobName = require(path.dirname(__dirname) +
        "/jobs/" +
        name +
        ".js");
      const jobIntance = new jobName(data);
      await jobIntance.handle();
      await job.destroy();
      console.log("Job Execute Success");
      setTimeout(() => {
        this.listen();
      }, 10000);
    } else {
      console.log("No job in queue");
    }
  },

  work: async () => {
    const job = await QueueJob.findOne({
      order: [["id", "asc"]],
    });
    if (job) {
      const { data, name } = JSON.parse(job.value);
      const jobName = require(path.dirname(__dirname) +
        "/jobs/" +
        name +
        ".js");
      const jobIntance = new jobName(data);
      await jobIntance.handle();
      await job.destroy();
      console.log("Job Execute Success");
    } else {
      console.log("No job in queue");
    }
  },
};
executeObj.listen();

module.exports = executeObj;
