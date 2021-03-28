const SibApiV3Sdk = require("sib-api-v3-sdk");
// const SENDINBLUE_API_KEY =
//   "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";
// const handler = () => {
//   // const { SENDINBLUE_API_KEY } = process.env;
//   const defaultClient = SibApiV3Sdk.ApiClient.instance;
//   var apiKey = defaultClient.authentications["api-key"];
//   apiKey.apiKey = SENDINBLUE_API_KEY;
//   var apiInstance = new SibApiV3Sdk.ContactsApi();

//   var createContact = new SibApiV3Sdk.CreateContact();
//   createContact = { email: "johnWick@doe.com" };

//   apiInstance.createContact(createContact).then(
//     function (data) {
//       return "API called successfully. Returned data: " + data;
//     },
//     function (error) {
//       return error;
//     }
//   );
// };

// handler();

exports.handler = async function (event, context) {
  const { SENDINBLUE_API_KEY } = process.env;
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = SENDINBLUE_API_KEY;
  var apiInstance = new SibApiV3Sdk.ContactsApi();

  var createContact = new SibApiV3Sdk.CreateContact();
  createContact = { email: "johnWick12@doe.com" };
  console.log(createContact);
  apiInstance
    .createContact(createContact)
    .then(function (data) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: data }),
      };
    })
    .catch(function (error) {
      return {
        statusCode: 100,
        body: JSON.stringify({ message: error }),
      };
    });
};
