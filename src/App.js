import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';
import React, { useState } from "react";
import Spotify from './util/Spotify';

export default function App() {
  Spotify.getAccessToken();

  const [tracks, setTracks] = useState([
    {
      trackName: 'First Kiss',
      artist: 'StrawBerry Girls',
      album: 'Tasmanian Glow',
      id: 1,
      uri: 'spotify:track:5uhMjQlGtZtox0ArFuMlCB'
    },
    {
      trackName: 'Redefined',
      artist: 'As I Lay Dying',
      album: 'Shaped By Fire',
      id: 2,
      uri: 'spotify:track:3JKIEqhpdNrM82JGzDMn4r'
    },
    {
      trackName: 'Just Like You',
      artist: 'Three Days Grace',
      album: 'Three Days Grace',
      id: 3,
      uri: 'spotify:track:1RtnIF8uRwTLxmcR87V6Wo'
    },
    {
      trackName: 'FaceTime with my Mom (Tonight)',
      artist: 'Bo Burnham',
      album: 'INSIDE',
      id: 4,
      uri: 'spotify:track:5sGFZ43saHla4skp3HG6VZ'
    },
    {
      trackName: 'Jaded',
      artist: 'Spiritbox',
      album: 'Jaded',
      id: 5,
      uri: 'spotify:track:1ZdDr1zM46JxFu2ugQc1mE'
    }
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const searchForArtist = (searchText) => {  
    setTracks((tracks) => tracks.filter((track) => track.artist.toLowerCase() === searchText.toLowerCase()));
  };

  const addToPlaylist = (track) => {
    if (!playlistTracks.some(e => e.id === track.id)) {
      //setTracks((tracks) => tracks.filter((e) => e.id !== track.id));
      setPlaylistTracks((playlistTracks) => [track, ...playlistTracks]);
    }
  };

  const removeFromPlaylist = (track) => {
    setPlaylistTracks((playlistTracks) => playlistTracks.filter((e) => e.id !== track.id));
  };

  const savePlaylistToSpotify = () => {
    setPlaylistTracks([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <main className="App-main">
          <> 
          <SearchBar searchForArtist={searchForArtist} />
          <div className="search-playlist-container">
            <SearchResults tracks={tracks} addToPlaylist={addToPlaylist} />
            <div className="playlistContainer">
              <Playlist playlistTracks={playlistTracks} removeFromPlaylist={removeFromPlaylist} />
              <button className="btnSaveSpotify" onClick={savePlaylistToSpotify} >SAVE TO SPOTIFY</button>
            </div>  
          </div>
          </>
      </main>
    </div>
  );
}
