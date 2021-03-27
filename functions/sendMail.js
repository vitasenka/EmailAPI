// const sendinBlueApi = require("sib-api-v3-sdk");

// const client = sendinBlueApi.ApiClient.instance();
// const { SENDINBLUE_API_KEY } = process.env;

exports.handler = function (event, context, callback) {
  console.log("hi");
  // let data = JSON.parse(event.body);
  callback.send("hi bro");
};
