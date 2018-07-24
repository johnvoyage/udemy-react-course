
const app = {
  visibility: false,
};

const toggleVisibility = (event) => {
  app.visibility = !app.visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{app.visibility ? "Hide details" : "Show details"}</button>
      {app.visibility && <p>The details!</p>}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();