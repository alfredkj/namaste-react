//The "react" means the react in node modules.
import React from "react";
import ReactDom from "react-dom";

const heading1 = React.createElement(
  "h1",
  {},
  "Hi I'm Alfred :D"
);
const heading2 = React.createElement(
  "h2",
  {},
  "This is fun to do!"
);
const heading3 = React.createElement(
  "h3",
  {},
  "This is nice to watch !"
);
const heading4 = React.createElement(
  "h4",
  {},
  "How long will it take to master it ?"
);
const child1 = React.createElement("div", { id: "child1" }, heading1);
const child2 = React.createElement("div", { id: "child2" }, heading2);
const child3 = React.createElement("div", { id: "child3" }, heading3);
const child4 = React.createElement("div", { id: "child4" }, heading4);
const parent = React.createElement("div", { id: "parent" }, [child1,child2,child3,child4]);
//console.log(parent);
const h1Heading = <h1> This is a valid jsx tag</h1>;
const branch = ReactDom.createRoot(document.getElementById("branch"));
branch.render(parent);
