const express = require("express");
const app = express();

const scheduler = require("node-cron");
const { transporter, options } = require("./services/email");

scheduler.schedule("* * * * * *", async () => {
    console.log("Checking scheduler");
    // transporter.sendMail(options, (error, info) => {
    //     if (error) {
    //         console.error(error);
    //     }
    //     else {
    //         console.log("Email send with info", info);
    //     }

    // })
    const info = await transporter.sendMail(options);
    console.log(info);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("App is running on port number", PORT);
})