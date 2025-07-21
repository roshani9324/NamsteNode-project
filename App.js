import React from "react";
import ReactDOM from "react-dom/client"; // ✅ correct import
//react,createElement =>It is a Object =>HTMLElement(render) to the browser
const Hello = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is my First project"),
    React.createElement("h2", {}, "I'm h2 tag "),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag "),
    React.createElement("h2", {}, "I'm h2 tag "),
    React.createElement("h3", {}, "I'm h3 tag "),
  ]),
]);

//React Element 
const Heading =(
  <h1 className="head" tabIndex="6">Namsate React using JSX</h1>
)
//React functional component or component composition 
const HeadingComponent = () => (
  <div id="container">
    <Heading />
    <h1>Namsate React Functional Component</h1>
  </div>
);
//JSX - HTML -like or XML- like Syntax
//JSX is a just Syntax and ReactElement is a Object
//JSX => Babel transpile it to React.createElement => ReactElement- JS Object => HTMLElement(render)
//const jsxHeading = <h1>This is using JSX ....</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
