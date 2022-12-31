import React from "react";

// Icons
import google from "../assets/google.png";

// Styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to Matrixgram!</h2>

        <div className={styles.button}>
          <div className={styles.loginWrapperRadius}>
            <img src={google} alt="google" />
          </div>
          Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
