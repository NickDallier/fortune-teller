import React from "react";

export default function Track(props) {
    const { track } = props;

    const handleClickAdd = () => {
        props.addToPlaylist(track);
    }

    const handleClickRemove = () => {
        props.removeFromPlaylist(track);
    }

    const btnClass = (props.isPlaylist) ? "btnRemoveFromPlaylist" : "btnAddToPlaylist";
    const btnText = (props.isPlaylist) ? "-" : "+";
    const btnClickFunction = (props.isPlaylist) ? handleClickRemove : handleClickAdd;

    return (
        <div className="trackContainer">
            <p className="songName">{track.trackName}</p>
            <p>{track.artist} | {track.album}</p>
            <button className={btnClass} onClick={btnClickFunction}>{btnText}</button>
        </div>
    );
}