console.log('App.js is running');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js</p>
var template = React.createElement(
    "h1",
    { id: "someid" },
    "From Babel..."
  );
const appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot);