import React, { useState } from 'react';

const BookEdit = ({ id, title, handleUpdateBook, setShowEdit }) => {
  const [text, setText] = useState(title);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateBook(id, text);
    setShowEdit(false);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={text}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
