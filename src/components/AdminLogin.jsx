import React from "react";
import email from "../assets/email.jpg";
import profile from "../assets/profile.jpeg";
import pass from "../assets/pass.jpeg";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import Data from "./data";
// import { validate } from 'email-validator';

const initialValues = { email: "", password: "" };

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!values.email) {
    errors.email = "Invalid email address.";
  }

  const passwordRegex = /(?=.*[0-9])/;
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters long.";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = "Invalid password. Must contain one number.";
  }

  return errors;
};

function AdminLogin() {
  const navigate = useNavigate();

  let { id } = useParams();
  Data.find((ele) => ele.id === id);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("visited fields", formik.touched);

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <h1 className="login-text">Login Page</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input
                  type="text"
                  placeholder="email"
                  className="name"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="password"
                  className="name"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="login-button">
                <button type="submit" onClick={() => navigate(`/dashboard`)}>
                  Login
                </button>
              </div>

              <p className="link">
                <a href="/#">Forgot password ?</a> Or<a href="/#">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
