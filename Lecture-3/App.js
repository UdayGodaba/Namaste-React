import React from "react";
import ReactDOM from "react-dom/client";

// React Elements

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from React"
);

console.log(heading);
const jsxHeading = <h1>Hello from JSX</h1>;
console.log(jsxHeading);

// React components

const Component1 = () => {
  return (
    <>
      <Component2 />
      <h1>Hello from Component1</h1>
    </>
  );
};

const Component2 = () => <h1>Hello from Component2</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);
root.render(<Component1 />);
