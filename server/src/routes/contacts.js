const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

// POST /api/contact
router.post('/', contactController.createContact);

module.exports = router;
