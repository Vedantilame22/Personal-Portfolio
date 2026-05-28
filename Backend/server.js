require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Import the new V6 BrevoClient
const { BrevoClient } = require('@getbrevo/brevo'); 

const app = express();
app.use(cors());
app.use(express.json());

// Initialize using the new unified client
const brevo = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Use the new nested method syntax
        const response = await brevo.transactionalEmails.sendTransacEmail({
            sender: { email: "noreply@yourdomain.com", name: name },
            to: [{ email: "your-receiving-email@gmail.com" }],
            replyTo: { email: email, name: name },
            subject: subject || "New Contact Form Submission",
            htmlContent: `<p>${message}</p>`
        });

        res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error("SDK Error:", error);
        res.status(500).json({ success: false, error: "Failed to send email" });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));