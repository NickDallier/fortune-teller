import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
      </header>
      <main className="App-main">
        <SearchBar />
        <div className="search-playlist-container">
          <SearchResults />
          <Playlist />
        </div>
      </main>
    </div>
  );
}

export default App;
