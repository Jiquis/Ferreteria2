// routes/materialsRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { getMaterials } = require('../data/materials');

router.get('/materials', verifyToken, getMaterials);

module.exports = router;