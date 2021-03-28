const SibApiV3Sdk = require("sib-api-v3-sdk");
// const SENDINBLUE_API_KEY =
//   "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";

// // const client = sendinBlueApi.ApiClient.instance();
// const handler = async function (event, context, callback) {
//   var SibApiV3Sdk = require("sib-api-v3-sdk");

//   var defaultClient = SibApiV3Sdk.ApiClient.instance;

//   // Configure API key authorization: api-key
//   var apiKey = defaultClient.authentications["api-key"];
//   apiKey.apiKey = SENDINBLUE_API_KEY;
//   // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//   //apiKey.apiKeyPrefix['api-key'] = "Token"

//   var apiInstance = new SibApiV3Sdk.ContactsApi();

//   var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
//   createContact = { email: "john@doe.com" };

//   apiInstance.createContact(createContact).then(
//     function (data) {
//       console.log("API called successfully. Returned data: " + data);
//     },
//     function (error) {
//       console.error(error);
//     }
//   );
// };

// handler();

exports.handler = async function (event, context) {
  const { SENDINBLUE_API_KEY } = process.env;
  const defaultClient = SibApiV3Sdk.ApiClient.instance();
  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = SENDINBLUE_API_KEY;
  var apiInstance = new SibApiV3Sdk.ContactsApi();

  var createContact = new SibApiV3Sdk.CreateContact();
  createContact = { email: "johnWick@doe.com" };

  apiInstance.createContact(createContact).then(
    function (data) {
      return "API called successfully. Returned data: " + data;
    },
    function (error) {
      return error;
    }
  );
};
