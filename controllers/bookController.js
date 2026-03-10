const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find({ available: true });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
