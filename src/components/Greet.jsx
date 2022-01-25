import React, { Component } from "react";

export default class Greet extends Component {
  constructor() {
    super();
    this.state = {
      mesage: "Happy new year",
      counter: 0,
      year: 2022,
      cityList: ["Pune", "Noida", "Chennai", "Bengaluru", "Kolkata"],
      empList: [
        { empId: 101, empName: "Employee1", empSal: 1000 },
        { empId: 102, empName: "Employee1", empSal: 2000 },
        { empId: 103, empName: "Employee3", empSal: 3000 },
      ],
    };
  }

  handleIncrement = () => {
    console.log("increment clicked");
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>
          {this.state.mesage}, {this.state.year}
        </h2>
        <p>Counter: {this.state.counter}</p>

        <button className="button" onClick={this.handleIncrement}>
          +
        </button>
        {/* <button className="button">Show cities</button> */}
        <h3>All cities listed</h3>
        {this.state.cityList.map((city, index) => {
          return <li key={index}>{city}</li>;
        })}

        <h3>Employee Details</h3>
        {this.state.empList.map((emp) => {
          return (
            <li key={emp.empId}>
              {emp.empId} ,{emp.empName}, {emp.empSal}
            </li>
          );
        })}
      </div>
    );
  }
}
