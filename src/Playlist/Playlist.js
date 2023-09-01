import Track from "../Track/Track";

export default function Playlist () {
    return(
        <div className="playlistContainer">
            <h2>Playlist</h2>
            <div className="trackContainer">
            </div>
            <button className="btnSaveSpotify">SAVE TO SPOTIFY</button>
        </div>
    );
}