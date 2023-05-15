import React, { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ id, title, handleDeleteBook, handleUpdateBook }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    handleDeleteBook(id);
  };

  const handleUpdate = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="book-show">
      <div>
        <img src={`https://picsum.photos/seed/${id}/300/200`} alt="books " />
        {showEdit ? (
          <BookEdit
            title={title}
            id={id}
            handleUpdateBook={handleUpdateBook}
            setShowEdit={setShowEdit}
          />
        ) : (
          <h3>{title}</h3>
        )}
      </div>

      <div className="actions">
        <button className="edit" onClick={handleUpdate}>
          Edit
        </button>
        <button className="delete" onCl ick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
