var cron = require("node-cron");

cron.schedule("*/5 * * * * *", () => {
  console.log("running a task every minute");
  //Viết logic thực thi queue
});
