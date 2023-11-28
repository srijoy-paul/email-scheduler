const nodemailer = require("nodemailer");
require('dotenv').config();

const Sender_Email = process.env.EMAIL;
const Reciever_Email = "starb9674@gmail.com"
const password = process.env.PASS;
const Host_Service = "smtp-relay.brevo.com"
const SMTP_Port = 587;

const CC = [];
const BCC = [];

const Email_Body_message = "Dear Dad, Happy Birthday to the most hardworking and caring father, Sujit Paul! 🎉 On this special day, I want to take a moment to express my gratitude for all the selfless love and dedication you've poured into our family.Your unwavering work ethic and determination inspire everyone around you.Your sacrifices and efforts never go unnoticed, and today is a reminder to celebrate not just the passing of another year but also the incredible person you are.May this year bring you the joy and fulfillment you deserve.Here's to more moments of laughter, love, and success.Thank you for being the anchor of our family and for showing us the true meaning of dedication and love.Wishing you a day filled with all the happiness you bring into our lives.Happy Birthday, Dad!With love, Srijoy Paul";

const Email_Subject = "Happy Birthday";
const Email_Body_Text = Email_Body_message;
const Email_Body_HTML = "<h1>Happy birthday!</h1>";

// < img src = `https://media0.giphy.com/media/KdC9XVrVYOVu6zZiMH/source.gif` />

const options = {
    from: Sender_Email,
    to: Reciever_Email,
    cc: CC,
    bcc: BCC,
    subject: Email_Subject,
    text: Email_Body_Text,
    // html: Email_Body_HTML,
};

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