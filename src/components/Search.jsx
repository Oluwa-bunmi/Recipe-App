import React, { useState } from "react";
import "../App.css";

const Search = ({icon}) => {
  const [input, setinput] = useState("");

   const handleSubmit = (event) => {
     event.preventDefault();
   
   };
  return (
    <form onSubmit={handleSubmit} className="search">
      {/* <div className="search"> */}
      <input
        type="text"
        placeholder="Search for recipes"
        value={input}
        
        onChange={(event) => setinput(event.target.value)}
      />
      <img src={icon} alt="search" />
      {/* </div> */}
      
    </form>
  );
};

export default Search;
