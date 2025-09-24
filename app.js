


import React from 'react'
import ReactDOM from 'react-dom/client'

//React.createElement => ReactElement - (js object)=>HTMLElement(render)
// const heading = React.createElement(
//     "h1",
//     {},
//     "Namaste React"
// );
// console.log(heading,"ReactElement");
//jsx=>React.createElement=>ReactElement(js object)=>HTMLElement(render)
//single line jsx not brackets requiered
//const jsxHeading = <h1 className='head' tabIndex="1">Nameste React</h1>
//multi line jsx bracket are mandatory
const jsxHeading = (<h1 className='head'
     tabIndex="1">Nameste React</h1>
)
 console.log(jsxHeading,"jsxheading") 
 {
    {
        {

        }
    }
 }

// const parent = React.createElement("div",{id:"parent"},
//     [React.createElement("div",{id:"child1"},
//     [React.createElement("h1",{},"heading1"),React.createElement("h2",{},"This is React Pracice ")]),
//     React.createElement("div",{id:"child2"},
//     [React.createElement("h1",{},"heading1"),React.createElement("h2",{},"heading2")])]
// )
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading)


