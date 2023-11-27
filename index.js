const express = require("express");
const app = express();

const scheduler = require("node-cron");

scheduler.schedule("* * * * *", () => {
    console.log("Checking scheduler");
})

const PORT = 3002;
app.listen(PORT, () => {
    console.log("App is running on port number", PORT);
})