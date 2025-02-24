const express = require('express');
const { createDocument, getDocument, updateDocument } = require('../controllers/documentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createDocument);
router.get('/:id', authMiddleware, getDocument);
router.put('/:id', authMiddleware, updateDocument);

module.exports = router;
