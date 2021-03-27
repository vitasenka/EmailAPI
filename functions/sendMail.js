const SibApiV3Sdk = require("sib-api-v3-sdk");
const { SENDINBLUE_API_KEY } = process.env;

var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = SENDINBLUE_API_KEY;

// const client = sendinBlueApi.ApiClient.instance();

exports.handler = async function (event, context, callback) {
  var apiInstance = new SibApiV3Sdk.ContactsApi();

  var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
  createContact = { email: "john@doe.com" };

  apiInstance.createContact(createContact).then(
    function (data) {
      console.log("API called successfully. Returned data: " + data);
    },
    function (error) {
      console.error(error);
    }
  );
  console.log("hi");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: SENDINBLUE_API_KEY }),
  };
};
