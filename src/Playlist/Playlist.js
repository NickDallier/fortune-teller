import Track from "../Track/Track";
import React, { useState } from "react";

export default function Playlist (props) {
    const [playlistName, setPlaylistName] = useState("");

    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (playlistName.length > 0 && props.playlistTracks.length > 0) {
            props.savePlaylistToSpotify(playlistName, props.playlistTracks);
            setPlaylistName("");
        } else {
            alert('Please ensure your playlist has a name and has at least one track');
        }
    }

    return(
        <>  
            <input 
                type="text"
                placeholder="Name your playlist..."
                value={playlistName}
                onChange={handlePlaylistNameChange}
                className="playlistNameText"
                id="playlistName"
            />
            {props.playlistTracks.map((playlistTrack) => ( 
                <Track key={playlistTrack.id} track={playlistTrack} isPlaylist={true} removeFromPlaylist={props.removeFromPlaylist} />              
            ))}
            <button className="btnSaveSpotify" onClick={handleSubmit} >SAVE TO SPOTIFY</button>
        </>
    );
}