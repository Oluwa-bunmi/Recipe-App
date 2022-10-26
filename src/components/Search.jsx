import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Search = ({ icon }) => {
  const [input, setinput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/searched/" + input)
  };
  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Search for recipes"
        value={input}
        onChange={(event) => setinput(event.target.value)}
      />
      <img src={icon} alt="search" />
    </form>
  );
};

export default Search;
