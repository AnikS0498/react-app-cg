import React, { Component } from "react";
import CounterComponent from "./CounterComponent";

class HoverCounter extends Component {
  render() {
    const { count, increaseCounter } = this.props;
    return (
      <div>
        <h2 onMouseOver={increaseCounter}>HoverCounter {count} times</h2>
      </div>
    );
  }
}

export default CounterComponent(HoverCounter);
