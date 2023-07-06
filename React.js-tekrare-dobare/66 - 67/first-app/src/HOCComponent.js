import React, { Component } from "react";

const withCounter = (OldComponent, step) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        number: 0,
      };
    }

    clickHandler = () => {
      this.setState((prevState) => ({
        number: prevState.number + step,
      }));
      console.log(this.props);
    };

    render() {
      return (
        <div>
          {console.log({ ...this.props })}
          <OldComponent
            number={this.state.number}
            clickHandler={this.clickHandler}
            {...this.props}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default withCounter;
