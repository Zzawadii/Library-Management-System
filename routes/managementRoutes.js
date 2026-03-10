const express = require('express');
const router = express.Router();
const managementController = require('../controllers/managementController');
const { protect, authorize } = require('../middleware/auth');

router.get('/books', protect, authorize('librarian'), managementController.getAllBooks);
router.get('/borrowed', protect, authorize('librarian'), managementController.getBorrowedBooks);

module.exports = router;
