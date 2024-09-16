import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import resList from "./utils/mockData";



const MainApp = () => (
    <div className="app">
        <Header />
        <Body />
        {/* {" I want to be the best JS Developer"} */}
    </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);