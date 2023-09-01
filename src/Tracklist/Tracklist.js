import Track from "../Track/Track";
import React, { useState } from "react";

export default function Tracklist(props) {
    return (    
        <>  
            {props.tracks.map((track) => ( 
                <Track key={track.id} track={track} />              
            ))}
        </>
    );
}

