const express = require('express');
const router = express.Router();
const educationResourceController = require('../controllers/educationResource.controller');

router.get('/', educationResourceController.getResources);

module.exports = router;
