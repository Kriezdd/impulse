import React from "react";
import {Outlet} from "react-router";
import Header from "./components/Header/Header";
import './App.scss';
import Footer from "./components/Footer/Footer";



function App() {
    return (
        <div className="App">
            <Outlet />
            <Header />
            <Footer />
        </div>
    );
}

export default App;
