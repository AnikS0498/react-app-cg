import React, { Component } from "react";
import CounterComponent from "./CounterComponent";

class ClickCounter extends Component {
  render() {
    const { count, increaseCounter } = this.props;
    return (
      <div>
        <button onClick={increaseCounter}> Click Counter {count} times</button>
      </div>
    );
  }
}

export default CounterComponent(ClickCounter)