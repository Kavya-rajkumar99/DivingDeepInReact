const header = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
);
console.log("heading", header); //React Element (JS Object)

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Root iss", root);
root.render(header);

{
  /* <div id="parent">
<div id="child">
    <h1>I am a heading inside child</h1>
</div>
</div> */
}
{
  /* <div id="parent">
  <div id="child">
      <h1>I am h1 tag inside child</h1>
      <h2>I am h2 tag inside child</h2>
  </div>
  <div id="child2">
      <h1>I am h1 tag inside child</h1>
      <h2>I am h2 tag inside child</h2>
  </div>
  </div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am h1 tag inside child"),
    React.createElement("h2", { key: "h2" }, "I am h2 tag inside child"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1" }, "I am h1 tag inside child"),
    React.createElement("h2", { key: "h2" }, "I am h2 tag inside child"),
  ]),
]);
console.log("Parent", parent);
root.render(parent);
