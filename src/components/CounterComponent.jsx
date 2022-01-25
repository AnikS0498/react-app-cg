import React from "react";

function CounterComponent(ChildComponent) {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 5,
      };
    }

    increaseCounter = () => {
      console.log("button clicked");
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <div>
          <ChildComponent
            count={this.state.count}
            increaseCounter={this.increaseCounter}
          />
        </div>
      );
    }
  }

  return NewComponent;
}

export default CounterComponent;
