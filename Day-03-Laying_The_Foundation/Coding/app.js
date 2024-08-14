import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React 🔥" 
);

console.log(heading);


// JSX - JSX is an HTML/XML like syntax
// Browsers does not understands JSX hence Parcel makes sure that the code is transpiled before it reaches the
// browser. Babel does the transpilation.
//  JSX => Babel transpiles it to React.createElement => JS Obect => Rendered as HTML DOM

const jsxHeading = <h1 id="heading" className="header">Namaste React by JSX 🌟</h1>

// React Component
// Class Based Component - OLD
// Functional Component - New

// React Functional Component
const Title = () => (
    <h1 className="head">
        Namaste React using JSX 🦌
    </h1>
)

const variable = (
    <h2 className="header-2">Defining a variable</h2>
)

const HeadingComponent = () => (
    <div class="container">
        <Title />
        {variable}
        <h1 className="headercomponent">Namaste React Functional Component🖤</h1>
    </div>
)

const HeaderComponent = () => (
    <div className="header">
        <img className="logo" src="https://fiverr-res.cloudinary.com/f_auto,q_auto,c_fill,g_center/v1/attachments/generic_asset/asset/f7635b66c121cda2adacc1ccc218cf73-1652447138259/logo-2.png" alt = "logo" />
        <input placeholder="Search" className ="search"></input>

    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);