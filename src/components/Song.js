import React, { useState } from "react";

export default function Song(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.song.title);

  function handleDelete() {
    props.remove(props.song);
  }

  function handleStatusChange() {
    props.togglePlayed(props.song);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleEditInputChange(e) {
    setEditedTitle(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    if (editedTitle.trim() !== "") {
      props.edit(props.song.id, editedTitle);
      setIsEditing(false);
    }
  }

  return (
    <li className="song">
      <div className="song-details">
        <p>
          {isEditing ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={editedTitle}
                onChange={handleEditInputChange}
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <span>
              {props.song.played === true ? (
                <del>{props.song.title}</del>
              ) : (
                props.song.title
              )}
            </span>
          )}
          <input
            type="checkbox"
            onChange={handleStatusChange}
            checked={props.song.played}
          />
          <span>{props.song.artist}</span>
        </p>
      </div>
      <div>
        {isEditing ? null : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        )}
        <button className="delete-button" onClick={handleDelete}>
          Remove
        </button>
      </div>
    </li>
  );
}
