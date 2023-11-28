const express = require("express");
const app = express();

const createDB = require("./config/db");
const Birthdate = require("./db_models/birthdateModel");
const scheduler = require("node-cron");
const { transporter, options } = require("./services/email");
const birthday_data = require("./birthday_data");

createDB.sync().then(() => {
    console.log("DB is running!");
});

// (async () => { await createDB.destroyAll(); })();
// (async () => { await Birthdate.truncate(); })()

// storing data into the DB
birthday_data.forEach(async (person, index) => {
    const personCreated = await Birthdate.create(person);
});

//Scheduling the emails, according to DOB and time.
options.map(async (emailMssg, index) => {
    const person = await Birthdate.findOne({
        where: {
            email: emailMssg.to,
        }
    });

    let dob = person.dataValues.dob;
    let mob = person.dataValues.mob;

    return (
        scheduler.schedule(`1 0 ${dob} ${mob} *`, async () => {
            console.log("Sending email");
            transporter.sendMail(emailMssg, (error, info) => {
                if (error) {
                    console.error(error);
                }
                else {
                    console.log("Email send with info", info);
                }
            })

        })
    )
})

// scheduler.schedule("* * * * *", async () => {
//     console.log("Sending email");
//     transporter.sendMail(options, (error, info) => {
//         if (error) {
//             console.error(error);
//         }
//         else {
//             console.log("Email send with info", info);
//         }

//     });

// const info = await transporter.sendMail(options);
// console.log(info);
// })

const PORT = 3000;
app.listen(PORT, () => {
    console.log("App is running on port number", PORT);
})