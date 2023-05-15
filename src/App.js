import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.round(Math.random() * 99999), title },
    ];
    setBooks(updatedBook);
  };

  const handleDeleteBook = (id) => {
    // if true then keep the item else remove the item
    const updatedBook = books.filter((book) => book.id !== id);
    setBooks(updatedBook);
  };

  const handleUpdateBook = (id, newTitle) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });
    setBooks(updatedBook);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        handleDeleteBook={handleDeleteBook}
        handleUpdateBook={handleUpdateBook}
      />
      <BookCreate createBook={handleCreateBook} />
    </div>
  );
}

export default App;
