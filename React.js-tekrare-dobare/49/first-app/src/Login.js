import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: false,
    };
  }

  render() {
    const { isLoggedin } = this.state;
    // if (isLoggedin) {
    //   return (
    //     <div>
    //       <h1>Welcome !</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <button>Login</button>
    //     </div>
    //   );
    // }
    // =======================================
    // let text;
    // if (isLoggedin) {
    //   text = <h1>Welcome !</h1>;
    // } else {
    //   text = <button>Login</button>;
    // }
    // return <div>{text}</div>;
    // =======================================
    // return (
    //   <div>{isLoggedin ? <h1>Welcome !</h1> : <button>Login</button>}</div>
    // );
    // =======================================
    return <div>{isLoggedin && <h1>Welcome !</h1>}</div>;
  }
}

export default Login;
