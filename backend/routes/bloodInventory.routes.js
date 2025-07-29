const express = require('express');
const router = express.Router();
const bloodInventoryController = require('../controllers/bloodInventory.controller');

router.get('/', bloodInventoryController.getInventory);

module.exports = router;
