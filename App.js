import React from "react";
import ReactDOM from "react-dom/client";

//React element
const spanEl = <span>paragraph</span>;

//Composing a react element in a react element
const para = <h3>I am a {spanEl}</h3>;

//React Component
const Title = () => (
  <h1 id="heading" tabIndex="1">
    Namaste React using JSX
  </h1>
);

//Component Composition - composing a react component and a react element in a raect component
const Heading = () => (
  <div id="container">
    <Title />
    <h2>This is a heading 🚀</h2>
    {para}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
