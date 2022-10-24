import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { HomeProvider } from "./components/Providers/HomeProvider";

function App() {
  return (
    <HomeProvider>
      <HomePage />
    </HomeProvider>
  );
}

export default App;
