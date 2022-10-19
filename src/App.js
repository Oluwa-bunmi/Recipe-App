import { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import SearchIcon from "./search.svg";

const App = () => {
  const [recipe, setRecipe] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    
  }

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async (title) => {
    const check = localStorage.getItem("recipe");
    if (check) {
      setRecipe(JSON.parse(check));

    }
    else{

      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
      );

      const data = await api.json();
      localStorage.setItem("recipe", JSON.stringify(data.recipes));
      console.log(data);
      setRecipe(data.recipes);
    }
  };
  return (
    <div className="App">
      <h1>RecipePalace</h1>
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for recipes"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => setRecipe(searchTerm)}
        />
      </div>
      {recipe?.length > 0 ? (
        <div className="container">
          {recipe.map((recipe) => (
            <Home recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No recipe found</h2>
        </div>
      )}
      ;
    </div>
  );
};

export default App;
