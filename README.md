# Library Management System

Simple library management system with JWT authentication for librarians and readers.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure `.env` file with your MongoDB URI and JWT secret

3. Start MongoDB

4. Run the server:
```bash
npm start
# or for development
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user (role: 'librarian' or 'reader')
- `POST /api/auth/login` - Login

### Reader Routes
- `GET /api/books/home` - View available books
- `POST /api/borrow` - Borrow a book (body: { bookId })
- `POST /api/borrow/return/:id` - Return a borrowed book

### Librarian Routes
- `POST /api/books` - Add new book
- `GET /api/management/books` - View all books
- `GET /api/management/borrowed` - View all borrowed books

## Usage Examples

Register librarian:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "librarian1", "password": "pass123", "role": "librarian"}'
```

Login:
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "librarian1", "password": "pass123"}'
```

Add book (librarian):
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "Book Title", "author": "Author Name", "isbn": "123456"}'
```
