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
    <div>
      <input
        placeholder="search recipe"
        value={searchValue}
        onChange={handleOnChange}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
