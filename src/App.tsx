import React from "react";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router";
function App() {
  return <div className="max-w-7xl mx-auto px-8">
    <Navbar />
    <Outlet />
  </div>;
}

export default App;
