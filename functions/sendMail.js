// const sendinBlueApi = require("sib-api-v3-sdk");

// const client = sendinBlueApi.ApiClient.instance();
// const { SENDINBLUE_API_KEY } = process.env;

exports.handler = async function (event, context, callback) {
  console.log("hi");
  // let data = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: process.env }),
  };
};
