import react, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as EmailValidator from "email-validator";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import "../ResetPassword/ResetPassword.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backendUrl } from "../../utils/db";
import LoginSkeleton from "../Login/LoginSkeleton";
const LoginComponent = () => {
  const [skeleton, setSkeleton] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useNavigate();
  const queryString = location.search;
  useEffect(() => {
    if (queryString) {
      const encoded = queryString.slice(1);
      const decoded = decodeURIComponent(encoded).split("&");
      [setEmail, setPassword].forEach((v, i) => v(decoded[i].split("=")[1]));
    }
    const timer = setTimeout(() => {
      setSkeleton(true);
    }, 500);
    return () => clearTimeout(timer);
  });
  const handleLogin = (values) => {
    setIsLoading(true);
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({
      email: values.email,
      password: values.password,
    });
    fetch(`${backendUrl}/users/login`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.status == "success") {
          toast.info("User logged in successfully ");
          localStorage.setItem("token", result.token);
          localStorage.setItem("role", result.data.user.role);
          localStorage.setItem("userName", result.data.user.firstName);
          localStorage.setItem("userEmail", result.data.user.email);
          localStorage.setItem("userId", result.data.user.id);
          result.data.user.profiles.profilePic &&
            localStorage.setItem(
              "profilePic",
              result.data.user.profiles.profilePic
            );
          if (
            result.data.user.role == "admin" ||
            result.data.user.role == "operator" ||
            result.data.user.role == "driver"
          ) {
            redirect("/Dashboard");
          } else {
          }
        } else {
          toast.error("Invalid email or password", { theme: "colored" });
        }
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Internal sever error!", { theme: "colored" });
        setIsLoading(false);
      });
  };
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((value) => !value);
  };
  return (
    <Formik
      initialValues={{ email, password }}
      onSubmit={(values) => handleLogin(values)}
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = "Invalid email address format.";
        }
        const passwordRegex = /(?=.*[0-9])/;
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be 8 characters long!";
        }
        // else if (passwordRegex.test(values.password)) {
        //   errors.password = "Password must contain atleast 1 number!";
        // }
        return errors;
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        if (queryString) Object.assign(values, { email, password });
        return (
          <div>
            {skeleton ? (
              <div className="container">
                <div>
                  <form onSubmit={handleSubmit} className="reset-form">
                    <div className="icon">
                      <FaIcons.FaUserCircle id="userIcon" />
                    </div>
                    <input
                      id="email-field"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email && "error"}
                    />{" "}
                    <br></br>
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                    {showPassword ? (
                      <div className="icon">
                        <AiIcons.AiOutlineEyeInvisible
                          id="eyeOne"
                          onClick={handleShowPassword}
                        />
                      </div>
                    ) : (
                      <div className="icon">
                        <AiIcons.AiOutlineEye
                          id="eyeTwo"
                          onClick={handleShowPassword}
                        />
                      </div>
                    )}
                    <input
                      id="pasword-field"
                      type={showPassword ? "password" : "text"}
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password && "error"}
                    />{" "}
                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}
                    <div className="checkbox">
                      <input type="checkbox" />{" "}
                      <label className="check-label" htmlFor="Stay logged in">
                        Remember me{" "}
                      </label>
                    </div>
                    <button type="submit" className="login-button" id="btn">
                      {loading ? "Loading..." : "Login"}
                    </button>
                    <h2 className="forgot-password">
                      {" "}
                      <Link to="/Reset">Forgot Password?</Link>
                    </h2>
                    {/* <br></br> */}
                  </form>
                </div>
                <ToastContainer />
              </div>
            ) : (
              <LoginSkeleton />
            )}
          </div>
        );
      }}
    </Formik>
  );
};
export default LoginComponent;
