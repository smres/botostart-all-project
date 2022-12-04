import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // روش اول :
    /*if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Welcome!</h1>
        </div>
      );
    }
    else {
        return (
            <div>
                <button>Login</button>
            </div>
        )
    }*/
    // ==============================
    // روش دوم :
    /*let text;
    if (this.state.isLoggedIn) {
      text = <h1>welcome!</h1>;
    } else {
      text = <button>Login</button>;
    }

    return <div>{text}</div>;*/
    // =============================

    // روش سوم :
    return(
        <div>
            {/* {this.state.isLoggedIn ? <h1>Welcome</h1> : <button>Login</button> } */}
            {this.state.isLoggedIn && <h1>Welcome!</h1>}
        </div>
    )
  }
}

export default Login;
