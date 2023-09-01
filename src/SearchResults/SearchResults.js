import Tracklist from '../Tracklist/Tracklist.js';

function SearchResults (props) {
    return(
        <div className="searchResultsContainer">
            <h2>Results</h2>
            <Tracklist tracks={props.tracks} />
        </div>
    );
}

export default SearchResults;