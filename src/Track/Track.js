import React from "react";

export default function Track(props) {
    const { track } = props;
    
    return (
        <div className="trackContainer">
            <p className="songName">{track.trackName}</p>
            <p>{track.artist} | {track.album}</p>
            <button className="btnAddToPlaylist">+</button>
        </div>
    );
}