import Home from "./components/Home";
import "./App.css";
import SearchIcon from "./search.svg";
import Search from "./components/Search";

import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
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
