import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";

import { contexts } from "../../Contexts/UserContext";
import "./Register.css";

const Register = () => {
  const { theme, createUser, verifyEmail, updateProfileName } =
    useContext(contexts);
  const [error, setError] = useState(null);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const ConPassword = form.ConPassword.value;

    //  Set password Error /set Password regex special charecter

    if (password !== ConPassword) {
      return setError("Your password did not match");
    }
    if (!/(?=.*[0-9])/.test(ConPassword)) {
      return setError("Password should be at least one number character");
    }
    if (!/(?=.*?[A-Z])/.test(ConPassword) && /(?=.*?[a-z])/.test(ConPassword)) {
      return setError(
        "Please. Password should be at least one Uppercase and one LowerCase"
      );
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(ConPassword)) {
      return setError("Password should be at least one Special Character");
    }
    if (!/.{6,}/.test(ConPassword)) {
      return setError("Password should be at least 6 character");
    }

    if (
      /(?=.*[0-9])/.test(ConPassword) &&
      /(?=.*?[A-Z])/.test(ConPassword) &&
      /(?=.*?[a-z])/.test(ConPassword) &&
      /(?=.*?[#?!@$%^&*-])/.test(ConPassword) &&
      /.{6,}/.test(ConPassword)
    ) {
      setError("Strong Password");
    }

   

    createUser(email, password)
      .then((result) => {
        verifyEmail();
        updateProfileName(name);
        toast.success("Please Check email");
        Navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="login-container ">
      <form
        onSubmit={handleRegistration}
        className={`login-form ${theme ? "darkModeLogin" : "lightModeLogin"}`}
      >
        <h2 className="text-center">Sign Up</h2>

        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <label htmlFor="ConPassword">
          Confrim Password
          <input
            type="password"
            id="ConPassword"
            name="ConPassword"
            placeholder="Confrim Password"
            required
          />
        </label>
        <div className="error-container"> 
          <p>{error}</p>
        </div>
        <button type="submit" className="btn-sigin">
          Sign Up
        </button>
        <div className="hr-block">
          <hr className="login-hr" />
          or
          <hr className="login-hr" />
        </div>

        <p className="text-center mt-5">
          {" "}
          Already haven an Account.Please{" "}
          <Link to="/login" className="resgiter-link">
            Sign in
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Register;
