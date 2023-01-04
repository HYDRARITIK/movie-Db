import React, { useState } from "react";
// import { Switch, Route } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleMoviePage from "./SingleMoviePage";
import Home from "./Home";

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/single/:id" element={<SingleMoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
