const express = require('express');
const router = express.Router();
const emailController = require('./emailController');
const validate = require('../Middleware/validate');
const emailSchema = require('./emailValidation');



router.post('/send', validate(emailSchema),emailController.sendEmail);

module.exports = router;
