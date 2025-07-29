const { sendWelcomeEmail } = require('./emailService');

exports.sendEmail = async (req, res) => {
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
};
