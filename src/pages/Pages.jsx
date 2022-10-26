import React from "react";
import Home from "../components/Home";
import Searched from "./Searched";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/searched/:search" element={<Searched/>}/>
  </Routes>;
};

export default Pages;
