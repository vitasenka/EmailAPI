const SibApiV3Sdk = require("sib-api-v3-sdk");

exports.handler = function (event, context, callback) {
  const { SENDINBLUE_API_KEY } = process.env;
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = SENDINBLUE_API_KEY;

  var emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

  emailApi
    .sendTransacEmail(
      JSON.stringify({
        subject: "My first Email",
        sender: { name: "Pirooz", email: "piroozamirpour@gmail.com" },
        replyTo: { name: "Pirooz", email: "piroozamirpour@gmail.com" },
        to: { name: "victor", email: "victoramirpour@gmail.com" },
        htmlContent:
          "<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>",
        params: { bodyMessage: "Made just for you!" },
      })
    )
    .then(
      function (data) {
        callback(null, {
          status: 200,
          body: JSON.stringify({ message: data }),
        });
      },
      function (error) {
        console.log(JSON.stringify(error));
        callback({
          body: JSON.stringify({ message: error }),
        });
      }
    );
};
