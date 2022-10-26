import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );

    const recipes = await data.json();

    console.log(data);
    setSearchedRecipes(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <>
      <div className="container">
        {searchedRecipes.map((item) => {
          return (
            <div className="movie" key={item.id}>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
// };

export default Searched;
