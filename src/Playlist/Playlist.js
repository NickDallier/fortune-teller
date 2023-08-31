import Track from "../Track/Track";

function Playlist () {
    return(
        <div className="playlistContainer">
            <h2>Playlist</h2>
            <div className="trackContainer">
                <Track />
            </div>
            <button>Save to Spotify</button>
        </div>
    );
}

export default Playlist;