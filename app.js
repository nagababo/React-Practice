


import React from 'react'
import ReactDOM from 'react-dom/client'
{/* <div id="parent">
    <div id="child1">
        <h1></h1>
        <h2> </h2>

    </div>
    <div id="child2">
        <h1></h1>
        <h2> </h2>
    </div>
</div> */}
//const heading = React.createElement("h1", { id: "heading" }, "I am from React");
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"heading1"),React.createElement("h2",{},"This is React Pracice ")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"heading1"),React.createElement("h2",{},"heading2")])]
)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)


