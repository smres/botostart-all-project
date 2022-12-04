import React from "react";
import UserC from "./UserC";
import UserF from "./UserF";

class App extends React.Component {

  render() {
    return (
      <div>
        <UserC lastName="Esmailzadeh" career="Pogrammer"/>
        <UserF name="Mohammad Reza" age="24"/>
      </div>
    )
  }
}

export default App