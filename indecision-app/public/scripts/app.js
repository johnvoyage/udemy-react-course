"use strict";

var appRoot = document.getElementById("app");

var app = {
  visibility: false
};

var visibilityClicked = function visibilityClicked(event) {
  app.visibility = !app.visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: visibilityClicked },
      app.visibility ? "Hide details" : "Show details"
    ),
    app.visibility ? React.createElement(
      "p",
      null,
      "The details!"
    ) : null
  );

  ReactDOM.render(template, appRoot);
};

render();
