const sendinBlueApi = require("sib-api-v3-sdk");

const client = sendinBlueApi.ApiClient.instance();
const { SENDINBLUE_API_KEY } = process.env;

exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body);
  callback.send(SENDINBLUE_API_KEY);
};
