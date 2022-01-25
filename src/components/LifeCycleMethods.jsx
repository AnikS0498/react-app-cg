import React from "react";
class LifeCycleMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ABC",
    };
    console.log(" LifeCycle A Constructor invoked");
  }

  handleClick = () => {
    this.setState({ name: "XYZ" });
  };
  //------------2---------------
  static getDerivedStateFromProps(props, state) {
    console.log(`LifeCycle A getDerivedStateFromProps 
        invoked  - Props -  ${props.year}  - State ${state.name}
        `);
    return null;
  }

  //-----------3----------
  shouldComponentUpdate() {
    console.log(" LifeCycle A shouldComponentUpdate invoked");
    return true;
  }
  //------------4----
  render() {
    console.log(" LifeCycle A rendered invoked");
    return (
      <div>
        <p>THis is rendered By LifeCycleA Componne </p>
        Name: {this.state.name}
        <hr />
        <input type="button" onClick={this.handleClick} value="Change Name" />
      </div>
    );
  }
  //-------------5--------------------
  componentDidMount() {
    console.log(" LifeCycle A componentDidMount invoked");
  }

  //---------------6--------------------
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log(" LifeCycle A getSnapshotBeforeUpdate invoked");
    return null;
  }

  componentDidUpdate() {
    console.log(" LifeCycle A componentDidUpdate invoked");
  }
}
export default LifeCycleMethods;
