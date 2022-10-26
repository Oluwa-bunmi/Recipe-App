import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeData = await data.json();
    setDetails(recipeData);
  };
  useEffect(() => {
    fetchDetails();
  },[params.name])
  return <div className="wrapper">
    <div>
        <h2>{details.title}</h2>
    </div>
    
    </div>;
};

export default Recipe;
