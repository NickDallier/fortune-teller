import Tracklist from '../Tracklist/Tracklist.js';

function SearchResults (props) {
    return(
        <div className="searchResultsContainer">
            <h2>Results</h2>
            <Tracklist tracks={props.tracks} addToPlaylist={props.addToPlaylist} />
        </div>
    );
}

export default SearchResults;