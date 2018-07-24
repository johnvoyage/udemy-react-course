const appRoot = document.getElementById("app");

const app = {
  visibility: false,
};

const visibilityClicked = (event) => {
  app.visibility = !app.visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={visibilityClicked}>{app.visibility ? "Hide details" : "Show details"}</button>
      {app.visibility ? <p>The details!</p> : null}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();