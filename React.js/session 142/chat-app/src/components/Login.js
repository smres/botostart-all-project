import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";

// Icons
import google from "../assets/google.png";

// Styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>
          Welcome to{" "}
          <span className={styles.typographyLogo}>Matrix-Gram !</span>
        </h2>

        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
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
