const AWS = require("aws-sdk");

exports.handler = function(event, context, callback) {

  console.log('TEST EMAIL SEND');
  console.log(event);

  // Set the region
  AWS.config.update({region: "eu-west-1"});

  // Create sendEmail params
  const params = {
    Destination: { /* required */
      CcAddresses: [
        "meszaros275@gmail.com",
        /* more emails if needed */
      ],
      ToAddresses: [
        "gergely.meszaros@haymarket.com",
        /* more items */
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
          Charset: "UTF-8",
          Data: event.text || ""
        },
        Text: {
          Charset: "UTF-8",
          Data: "simple text format"
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Test email subject from LAMBDA"
      }
    },
    Source: "info@zenthailtd.com", /* required */
    ReplyToAddresses: [
      "ZenThai ltd. <info@zenthailtd.com>",
      /* more items */
    ],
  };

  // Create the promise and SES service object
  const sendPromise = new AWS.SES({apiVersion: "2010-12-01"}).sendEmail(params).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise.then(
    function(data) {
      //callback(null, "Success message ID: " + data.MessageId);
      console.log("Success message ID: " + data.MessageId);
      let response = {
      statusCode: '200',
        body: JSON.stringify({ message: "Email sent!"}),
        headers: {
          "Content-Type": "application/json",
        }
      };

      context.succeed(response);

    }).catch(
      function(err) {
      console.error(err, err.stack);
    });

};
