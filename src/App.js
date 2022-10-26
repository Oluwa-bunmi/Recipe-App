import { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import SearchIcon from "./search.svg";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";

const App = () => {
  // const [recipe, setRecipe] = useState([]);

  // const getRecipe = async () => {
  //   // const check = localStorage.getItem("recipe");
  //   // if (check) {
  //   //   setRecipe(JSON.parse(check));
  //   // } else {
  //   const api = await fetch(
  //     `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
  //   );

  //   const data = await api.json();
  //   // localStorage.setItem("recipe", JSON.stringify(data.recipes));
  //   console.log(data);
  //   setRecipe(data.recipes);
  //   // }
  // };

  // useEffect(() => {
  //   getRecipe();
  // }, []);

  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <h1>RecipePalace</h1>
        <Search icon={SearchIcon} />
        <Home />
        {/* <{recipe?.length > 0 ? (
          <div className="container" key={recipe.id}>
            {recipe.map((recipe) => (
              <Home recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2> No recipe found</h2>
          </div>
        )}>
        ; */}
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
