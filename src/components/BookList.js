import React from 'react';
import BookShow from './BookShow';

const BookList = ({ books, handleDeleteBook, handleUpdateBook }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow
          {...book}
          handleDeleteBook={handleDeleteBook}
          handleUpdateBook={handleUpdateBook}
        />
      ))}
    </div>
  );
};

export default BookList;
