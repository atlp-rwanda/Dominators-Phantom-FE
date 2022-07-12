import "./ResetPassword.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import react, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../utils/db";
import * as AiIcons from "react-icons/ai";

const headersList = {
  Accept: "*/*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3030",
};

const location = window.location.href.split("=");

const token = location[location.length - 1];

const ResetPassword = () => {
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const password = useRef("");
  const confirmPassword = useRef("");

  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.current.value === confirmPassword.current.value) {
      fetch(`${backendUrl}/users/reset/${token}`, {
        method: "POST",
        body: JSON.stringify({
          password: password.current.value,
          confirm: confirmPassword.current.value,
        }),

        headers: headersList,
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          if (result.Message === "success") {
            toast.success(result.record);
            setTimeout(() => {
              redirect("/login");
            }, 2000);
          } else if (result.Message === "fail") {
            toast.error(result.record);
          } else {
            toast.error("failure");
          }
        });
    }
  };
  const validatePassword = () => {
    if (password.current.value == "" || confirmPassword.current.value == "") {
      toast.error("input fields can not be empty!");
      return false;
    }

    return true;
  };

  useEffect(() => {});

  const handleShowPassword = (e) => {
    e.preventDefault();

    setShowPassword((value) => !value);
  };

  return (
    <div className="reset-password">
      <div>
        <h2 className="reset-your-pwd">Reset your password?</h2>
      </div>
      <div className="container">
        <form className="reset-form">
          <input
            ref={password}
            className="pwd-reset-fields"
            type={showPassword ? "password" : "text"}
            name="password"
            placeholder="Enter new password"
            // value={password}
            // onChange={(e) =>
            //   setPassword((password) => password + e.target.value)
            // }
          />
          <br />
          {showPassword ? (
            <div className="icon">
              <AiIcons.AiOutlineEyeInvisible
                id="eyeOne"
                onClick={handleShowPassword}
              />
            </div>
          ) : (
            <div className="icon">
              <AiIcons.AiOutlineEye id="eyeTwo" onClick={handleShowPassword} />
            </div>
          )}
          <input
            ref={confirmPassword}
            className="pwd-reset-fields"
            type={showPassword ? "password" : "text"}
            name="password"
            placeholder="Confirm your password"
            // value={confirmPassword}
            // onChange={(e) =>
            //   setConfirmPasswordError(
            //     (e) =>
            //       e.target.value !=
            //       password.current.ref.slice(0, e.target.value.length)
            //   )
            // }
          />
          {confirmPasswordError ? (
            <div className="input-feedback">passwords don't match</div>
          ) : null}
          <br />
          <button
            type="submit"
            className="login-button"
            id="btn"
            onClick={handleSubmit}
          >
            Change password
          </button>
        </form>
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default ResetPassword;
