import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Pizza } from "./components/Pizza";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
      </Routes>
    </>
  );
};
export default App;
