import React from "react";
import "./App.css";
import { Header, Footer } from "./components/Index";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
