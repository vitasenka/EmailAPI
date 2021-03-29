const SibApiV3Sdk = require("sib-api-v3-sdk");

exports.handler = async function (event, context, callback) {
  const { SENDINBLUE_API_KEY } = process.env;
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = SENDINBLUE_API_KEY;

  var api = new SibApiV3Sdk.AccountApi();
  return api.getAccount();
};
