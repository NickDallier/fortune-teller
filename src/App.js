import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';
import Spotify from './util/Spotify';
import React, { useState } from "react";

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  let accessToken = '';

  const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
  
  if (urlAccessToken) {
    accessToken = urlAccessToken[1];
  }
  
  const connectToSpotify = () => {
    Spotify.getAccessToken();
  }

  const searchForTrack = (searchText) => {  
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
        <h1>Jammming</h1>
        <p>Search for any track and add songs to a Custom playlist!</p>
        <p>You can also name your playlist and save it to your own spotify account!</p>
        {!accessToken && 
          <button className="btnConnect" id="btnConnect" onClick={connectToSpotify}>CONNECT TO SPOTIFY</button>
        }
        
        {accessToken && 
        <>
          <SearchBar searchForTrack={searchForTrack} />
          <div className="search-playlist-container">
          <SearchResults tracks={tracks} addToPlaylist={addToPlaylist} />
          <div className="playlistContainer">
              <Playlist playlistTracks={playlistTracks} removeFromPlaylist={removeFromPlaylist} savePlaylistToSpotify={savePlaylistToSpotify} />
          </div>  
          </div>
        </> 
        }
        
      </main>
    </div>
  );
}
