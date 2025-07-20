import React from "react";
import ReactDOM from "react-dom/client"; // ✅ correct import
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Hello);
