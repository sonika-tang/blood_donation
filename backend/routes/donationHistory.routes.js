const express = require('express');
const router = express.Router();
const donationHistoryController = require('../controllers/donationHistory.controller');
const auth = require('../middleware/auth.middleware');

router.get('/user', auth, donationHistoryController.getUserHistory);

module.exports = router;
