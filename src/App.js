import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';
import React, { useState } from "react";
import Spotify from './util/Spotify';

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const searchForArtist = (searchText) => {  
    Spotify.search(searchText).then(track => {
      setTracks(track);
    });
  };

  const addToPlaylist = (track) => {
    if (!playlistTracks.some(e => e.id === track.id)) {
      setPlaylistTracks((playlistTracks) => [track, ...playlistTracks]);
    }
  };

  const removeFromPlaylist = (track) => {
    setPlaylistTracks((playlistTracks) => playlistTracks.filter((e) => e.id !== track.id));
  };

  const savePlaylistToSpotify = (playlistName, playlistTracks) => {
    Spotify.savePlaylist(playlistName, playlistTracks);
    setPlaylistTracks([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
            <p className="logo"><a href="http://nickdallier.ca">Nick Dallier</a></p>
            <ul>
                <li><a href="http://nickdallier.ca#aboutMe">About Me</a></li>
                <li><a href="http://nickdallier.ca#contact">Contact</a></li>
                <li><a href="https://nickdallier-jamming.netlify.app">Jammming</a></li>
            </ul>
        </nav>
      </header>
      <main className="App-main">
          <> 
          <h1>Jammming</h1>
          <SearchBar searchForArtist={searchForArtist} />
          <div className="search-playlist-container">
            
            <SearchResults tracks={tracks} addToPlaylist={addToPlaylist} />
            <div className="playlistContainer">
              <Playlist playlistTracks={playlistTracks} removeFromPlaylist={removeFromPlaylist} savePlaylistToSpotify={savePlaylistToSpotify} />
            </div>  
          </div>
          </>
      </main>
    </div>
  );
}
