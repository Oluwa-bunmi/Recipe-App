import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

const Home = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    getRecipe();
  }, []);
  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
    );
    const data = await api.json();
    console.log(data);
    setRecipe(data.recipes);
  };
  return (
    <div>
      
      <div className="container">
        {recipe.map((recipe) => {
          return (
            <div className="movie" key={recipe.id}>
              <div>
                <img src={recipe.image} alt="" />
              </div>
              <div>
                <p>{recipe.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
