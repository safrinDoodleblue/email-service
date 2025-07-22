const express = require('express');
const dotenv = require('dotenv');
const { sendWelcomeEmail } = require('./utils/emailService');


dotenv.config();

const app = express();
app.use(express.json());

app.post('/api/send', async (req, res) => {
  const { to, name } = req.body;

  if (!to || !name) {
    return res.status(400).json({ error: 'Missing "to" or "name" in request' });
  }

  try {
    await sendWelcomeEmail(to, name);
    res.json({ message: 'Welcome email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Email service running on port ${PORT}`);
});
