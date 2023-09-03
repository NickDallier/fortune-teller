import Track from "../Track/Track";
import React, { useState } from "react";

export default function Playlist (props) {
    const [playlistName, setPlaylistName] = useState("");

    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
    }

    return(
        <>  
            <input 
                type="text"
                placeholder="Name your playlist..."
                value={playlistName}
                onChange={handlePlaylistNameChange}
                className="playlistNameText"
            />
            {props.playlistTracks.map((playlistTrack) => ( 
                <Track key={playlistTrack.id} track={playlistTrack} isPlaylist={true} removeFromPlaylist={props.removeFromPlaylist} />              
            ))}
        </>
    );
}