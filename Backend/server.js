const express = require('express');
const cors = require('cors');
// Import the core BrevoClient wrapper 
const { BrevoClient } = require('@getbrevo/brevo');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize the Brevo Client with your API key
const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;

  // Basic validation
  if (!email || !message) {
    return res.status(400).json({ success: false, error: 'Email and message are required.' });
  }

  try {
    // Send transactional email directly using the client's built-in transactional method
    await brevo.transactionalEmails.sendTransacEmail({
      subject: "New Portfolio Message!",
      htmlContent: `
        <h3>New message from your portfolio site</h3>
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      sender: { name: "Portfolio Contact Form", email: "vedantilame22@gmail.com" },
      to: [{ email: process.env.RECEIVER_EMAIL, name: "Vedant Ilame" }],
      replyTo: { email: email }
    });

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