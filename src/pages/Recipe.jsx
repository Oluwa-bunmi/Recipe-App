import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  return <div>Recipe</div>;
};

export default Recipe;
