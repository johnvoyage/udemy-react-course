class Visibility extends React.Component {
  constructor(props) {
    super(props);

    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      visible: false
    };
  };

  toggleVisibility(event) {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Visibility Toggler</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visible ? "Hide details" : "Show details"}
        </button>
        {this.state.visible && <p>The details!</p>}
      </div>
    );
  };
};

ReactDOM.render(<Visibility />, document.getElementById('app'));


// const app = {
//   visibility: false,
// };

// const toggleVisibility = (event) => {
//   app.visibility = !app.visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>{app.visibility ? "Hide details" : "Show details"}</button>
//       {app.visibility && <p>The details!</p>}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();