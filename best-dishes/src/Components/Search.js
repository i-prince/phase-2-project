// Search.js
import React, { useState } from "react";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [mySearch, setMySearch] = useState("");

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setMySearch(searchValue);
  };

  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type a recipe"
          value={searchValue}
          onChange={handleOnChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Find Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
