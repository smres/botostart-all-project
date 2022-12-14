import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import Styles from "./SignUp.module.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...data, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    notify();
    if (!Object.keys(errors).length) {
      notify("You signed in successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={submitHandler} className={Styles.formContainer}>
        <h2 className={Styles.header}>SignUp</h2>
        <div className={Styles.formField}>
          <label>Name</label>
          <input
            className={
              errors.name && touched.name
                ? Styles.uncompleted
                : Styles.formInput
            }
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
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
        <div className={Styles.formField}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? Styles.uncompleted
                : Styles.formInput
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={Styles.formField}>
          <div className={Styles.checkBoxContainer}>
            <label>I accept term of privacy policy</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.isAccepted && touched.isAccepted
                  ? Styles.uncompleted
                  : Styles.formInput
              }
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div>
          <div className={Styles.formButtons}>
            <a href="#">Login</a>
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
