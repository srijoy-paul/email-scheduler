const nodemailer = require("nodemailer");
require('dotenv').config();
const Birthdate = require("../db_models/birthdateModel");
const birthday_data = require("../birthday_data");

const Sender_Email = process.env.EMAIL;
const password = process.env.PASS;
// const Reciever_Email = process.env.RECIEVER_EMAIL;
// const Reciever_Name = process.env.RECIEVER_NAME;
const Host_Service = "smtp-relay.brevo.com"
const SMTP_Port = 587;

const CC = [];
const BCC = [];

const Email_Body_message = `Happy Birthday! 🎉 Wishing you a day filled with joy, laughter, and all the special moments that make your heart smile. May this year bring you love, success, and endless happiness. Cheers to another amazing journey around the sun! 🎂🎈`;

const Email_Subject = "Happy Birthday";
const Email_Body_Text = Email_Body_message;
const Email_Body_HTML = "<h1>Happy birthday!</h1>";

// < img src = `https://media0.giphy.com/media/KdC9XVrVYOVu6zZiMH/source.gif` />

const options = birthday_data.map((person, index) => {
    return ({
        from: Sender_Email,
        to: person.email,
        cc: CC,
        bcc: BCC,
        subject: (Email_Subject + " " + person.name + "!"),
        text: Email_Body_Text,
    })
});

const transporter = nodemailer.createTransport({
    host: Host_Service,
    port: SMTP_Port,
    secure: false,
    auth: {
        user: Sender_Email,
        pass: password,
    },
});

module.exports = { transporter, options };