import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = ()=>(
  <h1 className="head" tabIndex="1">
    Nameste React
  </h1>
);
//React Component
//  const HeadingComponent = ()=>{
//      return <h1>i am from HeadingComponent</h1>
//  }

const elem = <span>hi</span>
const HeadingComponent = () => (
  <div id="container">
    {elem}
    <Title/>
    <h1 id="heading">I am from functional Heading Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
