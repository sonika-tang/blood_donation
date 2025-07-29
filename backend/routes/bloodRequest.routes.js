const express = require('express');
const router = express.Router();
const bloodRequestController = require('../controllers/bloodRequest.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, bloodRequestController.createRequest);
router.get('/user', auth, bloodRequestController.getUserRequests);

module.exports = router;
