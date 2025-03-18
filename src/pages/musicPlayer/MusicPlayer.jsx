import React from "react";
import songs from "../data/songs.json";
import styles from "../../pages/musicPlayer/MusicPlayer.module.css";

const MusicPlayer = () => {
  return (
    <div className={styles.songsContainer}>
      <h1 className={styles.playlistTitle}>My Playlist</h1>
      <div className={styles.songList}>
        <div className={styles.songHeader}>
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span>Date Added</span>
        </div>
        {songs.map((song, index) => (
          <div className={styles.songRow} key={song.id}>
            <span className={styles.songIndex}>{index + 1}</span>
            <div className={styles.songTitle}>
              <img
                src={song.songImage}
                alt={`${song.songTitle} cover`}
                className={styles.songImage}
              />
              <div className={styles.songDetails}>
                <a
                  href={song.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {song.songTitle}
                </a>
                <p>{song.artistName}</p>
              </div>
            </div>
            <span className={styles.songAlbum}>{song.albumName || "-"}</span>
            <span className={styles.songDate}>{song.releaseDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
