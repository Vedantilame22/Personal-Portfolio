const express = require('express');
const cors = require('cors');
// Import the updated Brevo SDK package
const SibApiV3Sdk = require('@getbrevo/brevo');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize the Transactional Emails API instance for Version 5 SDK
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

// 1. Root Test Route (Lets you verify your deployment status in a web browser)
app.get('/', (req, res) => {
  res.send('Backend Server is live and running perfectly!');
});

// 2. Contact POST Route
app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;

  // Basic validation
  if (!email || !message) {
    return res.status(400).json({ success: false, error: 'Email and message are required.' });
  }

  try {
    // Construct the email object payload matching the V5 contract
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.subject = "New Portfolio Message!";
    sendSmtpEmail.htmlContent = `
        <h3>New message from your portfolio site</h3>
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;
    // NOTE: Ensure this sender email is explicitly verified under 'Senders & IPs' in your Brevo Dashboard
    sendSmtpEmail.sender = { name: "Portfolio Contact Form", email: "vedantilame22@gmail.com" };
    sendSmtpEmail.to = [{ email: process.env.RECEIVER_EMAIL, name: "Vedant Ilame" }];
    sendSmtpEmail.replyTo = { email: email };

    // Trigger the V5 SDK email delivery promise
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    // Return message field matching your frontend expectations
    return res.status(200).json({ success: true, message: 'Email deployed successfully!' });
  } catch (error) {
    console.error('Brevo Client API Error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is cruising safely on port ${PORT}`);
});