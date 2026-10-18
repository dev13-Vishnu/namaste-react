import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello world from React",
);

console.log(heading);

const jsxHeading = <h1 id="heading">Namste react</h1>;

console.log(jsxHeading);

const Title = () => (
  <h1 tabIndex="5" className="head">
    Namaste React Using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
const ReactElement = React.createElement(
  "div",
  { id: "container" },
  [React.createElement(
    "h1",
    { tabIndex: "5", className: "head", key: 1 },
    "Namaste React Using JSX",
  ),React.createElement(
    "h1",
    { tabIndex: "5", className: "head", key: 2 },
    "Namaste React Using JSX",
  ),React.createElement(
    "h1",
    { className: "heading", key: 3   },
    "Namaste React Functional Component",
  ),]
);
const root = ReactDOM.createRoot(document.getElementById("root")).render(
//   
ReactElement
);
