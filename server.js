const express = require('express');
const dotenv = require('dotenv');
const emailRoutes = require('./Email/emailRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Email service running on port ${PORT}`);
});

