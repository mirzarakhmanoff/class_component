import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SinglePage from "./pages/Single";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<SinglePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
