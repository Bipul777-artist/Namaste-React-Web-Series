// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyx:"abc"},
//      "Hello From an Aspiring Developer!"
// );
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(heading);     //Object

// ReactElement(Object) => HTML(Browser Understands)
const parent = React.createElement("div",
    {id: "parent"}, [
    React.createElement("div", {id:"child1"},[ 
    React.createElement("h1", {}, "Learning React"),
    React.createElement("h2", {}, "Bipul Jha")]),

    React.createElement("div", {id:"child2"},[ 
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag")])
]);

// const api = async function namefunction(){
//     const ans = await fetch("https//netflix.com");
//     console.log(ans);
// }

// console.log(api);
root.render(parent); 