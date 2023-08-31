import React, { useState } from "react";

function SearchBar() {
    const [searchText, setSearchText] = useState("");

    const handleTextChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchText.length > 0) {
            /*
          const thought = {
            id: generateId(),
            text: text,
            expiresAt: getNewExpirationTime(),
          };
          props.addThought(thought);
          */
          setSearchText("");
        }
    }
    return (
        <div className="searchBarContainer">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Search for any song..."
                value={searchText}
                onChange={handleTextChange}
                />
                <br />
                <input type="submit" value="Search" />
            </form>   
        </div>
    );
}

export default SearchBar;