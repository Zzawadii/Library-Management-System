const Book = require('../models/Book');
const BorrowRecord = require('../models/BorrowRecord');

exports.borrowBook = async (req, res) => {
    try {
        const { bookId } = req.body;
        const book = await Book.findById(bookId);

        if (!book || !book.available) {
            return res.status(400).json({ message: 'Book not available' });
        }

        const borrowRecord = await BorrowRecord.create({
            book: bookId,
            user: req.user._id
        });

        book.available = false;
        await book.save();

        res.status(201).json(borrowRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.returnBook = async (req, res) => {
    try {
        const borrowRecord = await BorrowRecord.findById(req.params.id);

        if (!borrowRecord || borrowRecord.user.toString() !== req.user._id.toString()) {
            return res.status(404).json({ message: 'Record not found' });
        }

        borrowRecord.status = 'returned';
        borrowRecord.returnDate = Date.now();
        await borrowRecord.save();

        const book = await Book.findById(borrowRecord.book);
        book.available = true;
        await book.save();

        res.json({ message: 'Book returned successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
