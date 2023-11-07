const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/whatsapp', (req, res) => {
  const twiml = new MessagingResponse();

  const incomingMessage = req.body.Body.toLowerCase();

  if (incomingMessage === 'menu') {
    twiml.message('Welcome to the WhatsApp bot menu! Please select an option:\n1. Option 1\n2. Option 2\n3. Option 3');
  } else if (incomingMessage === '1') {
    twiml.message('You selected Option 1');
  } else if (incomingMessage === '2') {
    twiml.message('You selected Option 2');
  } else if (incomingMessage === '3') {
    twiml.message('You selected Option 3');
  } else {
    twiml.message('Invalid option. Please enter "menu" to see the options.');
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
