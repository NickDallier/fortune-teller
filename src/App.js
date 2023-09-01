import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';
import React, { useState } from "react";

export default function App() {
  const [tracks, setTracks] = useState([
    {
      trackName: 'First Kiss',
      artist: 'StrawBerry Girls',
      album: 'Tasmanian Glow',
      id: 1
    },
    {
      trackName: 'Redefined',
      artist: 'As I Lay Dying',
      album: 'Shaped By Fire',
      id: 2
    },
    {
      trackName: 'Just Like You',
      artist: 'Three Days Grace',
      album: 'Three Days Grace',
      id: 3
    },
    {
      trackName: 'FaceTime with my Mom (Tonight)',
      artist: 'Bo Burnham',
      album: 'INSIDE',
      id: 4
    },
    {
      trackName: 'First Kiss',
      artist: 'StrawBerry Girls',
      album: 'Tasmanian Glow',
      id: 5
    }
  ]);

  const searchForArtist = (searchText) => {  
    setTracks((tracks) => tracks.filter((track) => track.artist.toLowerCase() === searchText.toLowerCase()));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
      </header>
      <main className="App-main">
        <SearchBar searchForArtist={searchForArtist} />
        <div className="search-playlist-container">
          <SearchResults tracks={tracks} />
          <Playlist />
        </div>
      </main>
    </div>
  );
}
