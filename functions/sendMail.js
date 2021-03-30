const nodemailer = require("nodemailer");
const { user, pass } = process.env;

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user,
    pass,
  },
});

const message = {
  from: "witasenka@gmail.com",
  to: "piroozamirpour@gmail.com",
  subject: "My firs email",
  text: "Hi. I'm just testing my nodemailer function",
  html: "<p>Hi. I'm just testing my nodemailer function</p>",
};

exports.handler = function (event, context, callback) {
  transporter
    .sendMail(message)
    .then((info) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: info }),
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    })
    .catch((err) => {
      callback(JSON.stringify({ message: err }));
    });
};
