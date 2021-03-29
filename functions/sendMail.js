const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "witasenka@gmail.com",
    pass: "860239387",
  },
});

const message = {
  from: "witasenka@gmail.com",
  to: "piroozamirpour@gmail.com",
  subject: "My firs email",
  text: "Hi. I'm just testing my nodemailer function",
};

transporter
  .sendMail(message)
  .then((info) => {
    console.log(JSON.stringify(info));
  })
  .catch((err) => {
    console.log(JSON.stringify(err));
  });

exports.handler = function (event, context, callback) {
  transporter
    .sendMail(message)
    .then((info) => {
      callback(null, JSON.stringify(info));
    })
    .catch((err) => {
      callback(JSON.stringify(err));
    });
};
