import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const [recipe, setRecipe] = useState([]);

  const getRecipe = async () => {
    const check = localStorage.getItem("recipe");
    if (check) {
      setRecipe(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
      );

      const data = await api.json();
      localStorage.setItem("recipe", JSON.stringify(data.recipes));
      console.log(data);
      setRecipe(data.recipes);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      <div className="container">
        {recipe.map((recipe) => {
          return (
            <div className="movie" key={recipe.id}>
              <Link to={"/recipe/" + recipe.id }>
              <div>
                <img src={recipe.image} alt="" />
              </div>
              <div>
                <p>{recipe.title}</p>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
