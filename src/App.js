import React from "react";
import Header from "./components/Header/Header";
import './App.scss';
import {Outlet} from "react-router";



function App() {
    return (
        <div className="App">
            <Outlet/>
            <Header/>
        </div>
    );
}

export default App;
