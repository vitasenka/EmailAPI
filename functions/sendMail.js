const SibApiV3Sdk = require("sib-api-v3-sdk");

exports.handler = function (event, context, callback) {
  const { SENDINBLUE_API_KEY } = process.env;
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = SENDINBLUE_API_KEY;

  var api = new SibApiV3Sdk.AccountApi();
  api.getAccount().then(
    function (data) {
      callback(
        null,
        JSON.stringify({
          statusCode: 200,
          body: JSON.stringify({ message: "Hello World" }),
        })
      );
    },
    function (error) {
      console.error(error);
    }
  );
};
