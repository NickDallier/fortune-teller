import React, { useState } from "react";

export default function SearchBar(props) {
    const [searchText, setSearchText] = useState("");

    const handleTextChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchText.length > 0) {
            props.searchForArtist(searchText);
        }
    }

    return (
        <div className="searchBarContainer">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Search for any artist..."
                value={searchText}
                onChange={handleTextChange}
                className="searchBar"
                />
                <br />
                <input type="submit" value="SEARCH" className="btnSearch" />
            </form>   
        </div>
    );
}