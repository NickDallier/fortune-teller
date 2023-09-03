import Track from "../Track/Track";
import React from "react";

export default function Tracklist(props) {
    return (    
        <>  
            {props.tracks.map((track) => ( 
                <Track key={track.id} track={track} isPlaylist={false} addToPlaylist={props.addToPlaylist} />              
            ))}
        </>
    );
}

