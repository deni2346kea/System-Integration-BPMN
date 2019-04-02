'use strict';
const express = require('express');
const router = express.Router();

// routers would go here
const studentRouter = require('./studentRouter/studentRouter');
const smsRouter = require('./sms/smsRouter');
const generateCodeRouter = require('./codeGenerator/codeGeneratorRouter');
const ipRouter = require('./ip/ipRouter');
// ENDPOINT

// Endpoint: /api/student/
router.use('/student', studentRouter);

// Endpoint: /api/sms/
router.use('/sms', smsRouter);

// Endpoint: /api/generateCode/
router.use('/generateCode', generateCodeRouter);

// Endpoint: /api/ip/
router.use('/ip', ipRouter);

// router.use('/math', mathRouter);
// Endpoint: /api/math/

module.exports = router;
