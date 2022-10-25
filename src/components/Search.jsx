import React from "react";
import "../App.css";

const Search = ({ icon, isLoading, query, setQuery, handleSubmit, searchRecipes }) => {
  return (
    // <form onSubmit={handleSubmit} className="search">
    <div className="search">
      <input
        type="text"
        placeholder="Search for recipes"
        value={query}
        name={query}
        // disabled={isLoading}
        onChange={(event) => setQuery(event.target.value)}
      />
      <img src={icon} alt="search"  />
    </div>
    //   {/* onClick={() => searchRecipes(query)} */}
    // // </form>
  );
};

export default Search;
