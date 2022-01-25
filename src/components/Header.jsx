import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome",
    };
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.message} to {this.props.compName}, {this.props.location}
        </h2>
        <hr color="blue" size="2"/>
      </div>
    );
  }
}
