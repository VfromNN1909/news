import './App.css';
import React from "react"
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
