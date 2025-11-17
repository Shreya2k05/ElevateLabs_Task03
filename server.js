// server.js

// 1. Setup and Middleware
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json()); 

// In-memory array (Simulating a database)
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' },
];
let nextId = 3; 

// --- 2. API Endpoints (CRUD) ---

// GET /books: Read all books
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

// POST /books: Create a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    
    if (!title || !author) {
        // Return 400 Bad Request if data is missing
        return res.status(400).json({ error: 'Title and author are required.' });
    }

    const newBook = {
        id: nextId++, // Assign ID and then increment for the next book
        title,
        author,
    };

    books.push(newBook);
    // Respond with 201 Created status and the new book object
    res.status(201).json(newBook);
});

// PUT /books/:id: Update a book
app.put('/books/:id', (req, res) => {
    // Convert the URL parameter (string) to an integer
    const idToUpdate = parseInt(req.params.id);
    const { title, author } = req.body;

    // Find the index of the book in the array
    const bookIndex = books.findIndex(book => book.id === idToUpdate);

    if (bookIndex === -1) {
        // Return 404 Not Found
        return res.status(404).json({ error: `Book with ID ${idToUpdate} not found.` });
    }

    // Update the book properties (only if new values are provided)
    books[bookIndex] = {
        ...books[bookIndex],
        title: title || books[bookIndex].title, 
        author: author || books[bookIndex].author,
    };

    res.status(200).json(books[bookIndex]);
});

// DELETE /books/:id: Delete a book
app.delete('/books/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const initialLength = books.length;
    
    // Create a new array without the book to be deleted
    books = books.filter(book => book.id !== idToDelete);

    if (books.length === initialLength) {
        // If the length didn't change, the book wasn't found
        return res.status(404).json({ error: `Book with ID ${idToDelete} not found.` });
    }

    // Respond with 204 No Content for a successful deletion
    res.status(204).send(); 
});

// --- 3. Start the Server ---
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});