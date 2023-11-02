var cron = require("node-cron");
const queue = require("./ExecuteQueue");

cron.schedule("*/10 * * * * *", () => {
  queue.work();
});
