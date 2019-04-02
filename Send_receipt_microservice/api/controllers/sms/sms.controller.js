'use strict';

const accountSid = process.env.TWILIO_API_SID;
const authToken = process.env.TWILIO_API_KEY;
const twilioNumber = process.env.TWILIO_API_NUMBER;

const Twilio = require('twilio');
const HttpError = require('./../../lib/utils/http-error');
const client = new Twilio(accountSid, authToken);

async function testTwilio({number, message}) {
  console.log(number);
  console.log(message);

  try {
    client.messages.create({
      body: message,
      to: number,  // Text this number
      from: twilioNumber // From a valid Twilio number
    })
    .then((message) => {
      console.log(message.sid);
      return true;
    });
  } catch (err) {
    throw new HttpError('Bad request', 'Check params', 500);
  }
}

module.exports = {
  testTwilio: testTwilio
};
