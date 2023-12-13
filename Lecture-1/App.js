const heading = React.createElement(
  "h1" /*Type of Tag*/,
  {
    id: "heading" /*Attributes*/,
  },
  "Hello World from React" /*Children */
);

console.log(heading); /*Object*/

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// Creating a nested react element
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h1", {}, "I'm a h2 tag"),
  ])
);

root.render(parent);
