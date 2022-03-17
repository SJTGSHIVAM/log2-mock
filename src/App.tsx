import { useEffect, useState } from "react";
// @ts-ignore
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}
