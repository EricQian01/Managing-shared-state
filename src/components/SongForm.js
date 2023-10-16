import { useState } from "react";
import { nanoid } from "nanoid";
export default function SongForm(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleArtistChange(e) {
    setArtist(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newSong = {
      title: title,
      artist: artist,
      played: false,
      id: nanoid()
    };
    props.addSong(newSong);
    //Rest Title and Artist
    setTitle("");
    setArtist("");
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          Add New Task:
          <input type="text" onChange={handleTitleChange} value={title} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
