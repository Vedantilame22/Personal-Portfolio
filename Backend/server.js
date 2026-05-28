const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Health Status Route (Open this in your browser to verify the server is live)
app.get('/', (req, res) => {
  res.status(200).send('Backend Server is live and running perfectly!');
});

// 2. Production Contact Route
app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;

  // Form input validation
  if (!email || !message) {
    return res.status(400).json({ success: false, error: 'Email and message are required.' });
  }

  try {
    // Structural JSON payload explicitly following the Brevo V3 REST API contract
    const emailPayload = {
      sender: { 
        name: "Portfolio Contact Form", 
        email: "vedantilame22@gmail.com" 
      },
      to: [
        { 
          email: process.env.RECEIVER_EMAIL, 
          name: "Vedant Ilame" 
        }
      ],
      replyTo: { 
        email: email 
      },
      subject: "New Portfolio Message!",
      htmlContent: `
        <h3>New message from your portfolio site</h3>
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Make a direct HTTP request to Brevo's core delivery server
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify(emailPayload)
    });

    const data = await response.json();

    // Check if Brevo rejected the transmission (e.g., bad API key or unverified sender)
    if (!response.ok) {
      console.error('Brevo API Endpoint Error Rejection:', data);
      return res.status(response.status).json({ success: false, error: data.message || 'Brevo API error occurred.' });
    }

    console.log('Email safely accepted by Brevo servers. Message ID:', data.messageId);
    return res.status(200).json({ success: true, message: 'Email deployed successfully!' });

  } catch (error) {
    console.error('Fatal Backend Server Catch Triggered:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error.' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is cruising safely on port ${PORT}`);
});