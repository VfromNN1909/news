
import './App.css';
import React from "react"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  return (
      <div className="app-wrapper">
            <Header/>
            <Navbar />
            <Content />
      </div>
  );
}

export default App;