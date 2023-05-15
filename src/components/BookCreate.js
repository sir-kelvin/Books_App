import React, { useState } from 'react';

const BookCreate = ({ createBook }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(text);
    setText('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={text} onChange={handleChange} />
        <button>Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
