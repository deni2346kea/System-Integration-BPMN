'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const smsController = require('./../../controllers/sms/sms.controller');

router.post('/', (req, res, next) => {
  smsController.testTwilio({number: req.body.number, message: req.body.message})
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
