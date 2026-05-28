const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware - Configured cleanly to handle cross-origin routing
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// 1. Health Status Route (Open this directly in a browser tab to verify the server is alive)
app.get('/', (req, res) => {
  res.status(200).json({ status: "active", message: "Backend Server is live and running perfectly!" });
});

// 2. Production Contact Route matching Footer.jsx exactly
app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;

  // Validate incoming fields exactly as sent from the frontend form
  if (!email || !message) {
    return res.status(400).json({ success: false, error: 'Email and message are required.' });
  }

  try {
    // Pure JSON payload conforming directly to Brevo's REST API contract
    const emailPayload = {
      sender: { 
        name: "Portfolio Contact Form", 
        email: "vedantilame22@gmail.com" // Must be your verified Brevo sender email
      },
      to: [
        { 
          email: process.env.RECEIVER_EMAIL || "vedantilame22@gmail.com", 
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

    // Make a standard native HTTP request directly to Brevo's API
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

    if (!response.ok) {
      console.error('Brevo API Rejection:', data);
      return res.status(response.status).json({ success: false, error: data.message || 'Brevo API error.' });
    }

    console.log('Email accepted by Brevo. Message ID:', data.messageId);
    return res.status(200).json({ success: true, successMessage: 'Email deployed successfully!' });

  } catch (error) {
    console.error('Fatal Backend Server Catch Triggered:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error.' });
  }
});

// Start Server - Explicitly binding '0.0.0.0' guarantees Render maps external routes correctly
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is cruising safely on port ${PORT}`);
});