import { useState } from "react";
import Song from "./Song";
import SongForm from "./SongForm";

export default function Playlist() {
  const [songs, setSongs] = useState([]);

  function addSong(song) {
    const updatedSongs = [...songs, song];
    setSongs(updatedSongs);
  }

  function removeSong(track) {
    const updatedSongs = songs.filter(function (song) {
      return song.id !== track.id;
    });
    setSongs(updatedSongs);
  }

  function togglePlayed(track) {
    const updatedSongs = songs.map(function (song) {
      if (song.id === track.id) {
        song.played = !song.played;
      }
      return song;
    });
    setSongs(updatedSongs);
  }

  function editSong(id, newTitle) {
    const updatedSongs = songs.map(function (song) {
      if (song.id === id) {
        song.title = newTitle;
      }
      return song;
    });
    setSongs(updatedSongs);
  }

  return (
    <div>
      <ul>
        {songs.map((song) => (
          <Song
            key={song.id}
            song={song}
            remove={removeSong}
            togglePlayed={togglePlayed}
            edit={editSong}
          />
        ))}
      </ul>
      <SongForm addSong={addSong} />
    </div>
  );
}
