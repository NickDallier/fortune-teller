import React, { useState, useEffect } from "react";

export default function SearchBar({searchForTrack}) {
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const oldSearchText = JSON.parse(localStorage.getItem('searchText'));
        if (oldSearchText) {
            setSearchText(oldSearchText);
            searchForTrack(oldSearchText);
            localStorage.removeItem('searchText');
        }
      }, []);

    useEffect(() => {
        localStorage.setItem('searchText', JSON.stringify(searchText));
      }, [searchText]);



    const handleTextChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchText.length > 0) {
            searchForTrack(searchText);
        } else {
            alert('Please type a search term');
        }
    }

    return (
        <div className="searchBarContainer">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Search for a track..."
                value={searchText}
                onChange={handleTextChange}
                className="searchBar"
                id="searchBar"
                />
                <br />
                <input type="submit" value="SEARCH" className="btnSearch" id="btnSearch" />
            </form>   
        </div>
    );
}