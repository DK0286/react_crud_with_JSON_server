import React from "react";
import Navbar from "./Components/Header";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import AddCricketer from "./Components/AddCricketer";
import NotFound from "./Components/NotFound";
import EditCricketer from "./Components/EditCricketer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AddCricketer" element={<AddCricketer />} />
        <Route exact path="/edit/:id" element={<EditCricketer/>} />
        <Route element ={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
