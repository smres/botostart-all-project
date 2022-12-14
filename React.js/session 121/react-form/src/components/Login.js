import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import Styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...data, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    notify();
    if (!Object.keys(errors).length) {
      notify("You Loged in successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={submitHandler} className={Styles.formContainer}>
        <h2 className={Styles.header}>Login</h2>
        <div className={Styles.formField}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.email && touched.email
                ? Styles.uncompleted
                : Styles.formInput
            }
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={Styles.formField}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.password && touched.password
                ? Styles.uncompleted
                : Styles.formInput
            }
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div>
          <div className={Styles.formButtons}>
            <Link to="/signup">Sign Up</Link>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
