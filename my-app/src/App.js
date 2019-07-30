import React from "react";
import "./App.css";
import Header from "./components/header";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />

      <AppRouter />
    </div>
  );
}

export default App;
