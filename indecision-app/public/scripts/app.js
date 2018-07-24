"use strict";

var app = {
  visibility: false
};

var toggleVisibility = function toggleVisibility(event) {
  app.visibility = !app.visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibility },
      app.visibility ? "Hide details" : "Show details"
    ),
    app.visibility && React.createElement(
      "p",
      null,
      "The details!"
    )
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
