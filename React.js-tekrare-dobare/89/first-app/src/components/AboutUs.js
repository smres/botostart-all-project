import React, { Component } from "react";

import { Link, Route } from "react-router-dom";

import Programmers from "./Programmers";
import Drivers from "./Drivers";

class AboutUs extends Component {
  reset = () => {
    this.props.history.replace("/blogs");
  };

  render() {
    return (
      <div>
        <h1>AboutUs</h1>
        <ul>
          <li>
            <Link to="/aboutus/programmers">Programmers</Link>
          </li>
          <li>
            <Link to="/aboutus/drivers">Drivers</Link>
          </li>
        </ul>

        <div>
          <Route
            path="/aboutus/programmers"
            render={(props) => <Programmers {...props} />}
          />
          <Route
            path="/aboutus/drivers"
            render={(props) => <Drivers {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default AboutUs;
