import { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import SearchIcon from "./search.svg";
import Search from "./components/Search";

const searchApi =
  `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=`;
const App = () => {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState("");

  const getRecipe = async () => {
    // const check = localStorage.getItem("recipe");
    // if (check) {
    //   setRecipe(JSON.parse(check));
    // } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
      );

      const data = await api.json();
      // localStorage.setItem("recipe", JSON.stringify(data.recipes));
      console.log(data);
      setRecipe(data.recipes);
    // }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const searchRecipes = async () => {
    setisLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipe(data.recipes);
    setisLoading(false);
  };
  useEffect(() => {
    searchRecipes(query);
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <div className="App">
      <h1>RecipePalace</h1>
      <Search
        icon={SearchIcon}
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      {recipe?.length > 0 ? (
        <div className="container" key={recipe.id}>
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
