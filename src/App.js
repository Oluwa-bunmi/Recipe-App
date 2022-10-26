import { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import SearchIcon from "./search.svg";
import Search from "./components/Search";
// import Pages from "./pages/Pages";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <h1>RecipePalace</h1>
        <Search icon={SearchIcon} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>

       
      </Router>
    </div>
  );
};

export default App;
