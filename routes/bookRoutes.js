const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { protect, authorize } = require('../middleware/auth');

router.get('/home', protect, authorize('reader'), bookController.getBooks);
router.post('/', protect, authorize('librarian'), bookController.createBook);

module.exports = router;
