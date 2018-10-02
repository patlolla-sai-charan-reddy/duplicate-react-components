import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import "./styles.css";

let chase = [];

class Text extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <p>{this.props.id}</p>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0,
      val: []
    };
  }
  renderApp() {
    this.setState({
      data: this.state.data + 1
    });

    chase.push(this.state.data);
    console.log(chase);

    this.setState({
      val: chase
    });
  }
  cloneMethod(event) {
    event.persist();
    console.log(event);
    $(event.target.id)
      .clone()
      .appendTo(".test");
  }
  render() {
    return (
      <div>
        <p onClick={this.renderApp.bind(this)}>hello</p>
        <p onClick={event => this.cloneMethod(event)}>clone</p>
        <div className="test" />
        <Text id={0} />
        {this.state.val.map(function(player, index) {
          return <Text index={index} id={player} />;
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
