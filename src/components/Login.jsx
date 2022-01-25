import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
  }

  loginButton = () => {
    this.setState((prevState) => {
      return {
        login: !prevState.login,
      };
    });
    console.log(this.state.login);
  };

  render() {
    return (
      <div>
        {`Log ${!this.state.login ? "in" : "out"}`}
        {!this.state.login && (
          <button className="button" onClick={this.loginButton}>
            Login
          </button>
        )}

        {this.state.login && (
          <button className="button" onClick={this.loginButton}>
            Logout
          </button>
        )}
      </div>
    );
  }
}
