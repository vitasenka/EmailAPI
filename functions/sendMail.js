// const sendinBlueApi = require("sib-api-v3-sdk");

// const client = sendinBlueApi.ApiClient.instance();

exports.handler = async function (event, context, callback) {
  console.log("hi");
  const { SENDINBLUE_API_KEY } = process.env;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: SENDINBLUE_API_KEY }),
  };
};
