const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');
const { protect, authorize } = require('../middleware/auth');

router.post('/', protect, authorize('reader'), borrowController.borrowBook);
router.post('/return/:id', protect, authorize('reader'), borrowController.returnBook);

module.exports = router;
