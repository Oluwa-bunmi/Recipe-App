import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeData = await data.json();
    console.log(recipeData);
    setDetails(recipeData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div className="wrapper">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div className="info">
        <button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </button>
        <button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>
        <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
      <ul>
        {details.extendedIngredients.map((ingredient) => 
            <li key={ingredient.id}>{ingredient.original}</li>
         )}
      </ul>
      </div>
    </div>
  );
};

export default Recipe;
