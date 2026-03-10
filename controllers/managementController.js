const Book = require('../models/Book');
const BorrowRecord = require('../models/BorrowRecord');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBorrowedBooks = async (req, res) => {
    try {
        const borrowedBooks = await BorrowRecord.find()
            .populate('book')
            .populate('user', 'username');
        res.json(borrowedBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
