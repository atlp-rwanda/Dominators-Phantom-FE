import "./ResetPassword.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      if (password === confirmPassword) {
        toast.info("password reset successfull!");
        redirect("/login");
      } else {
        toast.error("password mismatches!");
      }
    }
  };
  const validatePassword = () => {
    if (password == "" || confirmPassword == "") {
      toast.error("input fields can not be empty!");
      return false;
    }

    return true;
  };



  const handleReset = (values) => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      email: values.email,
    });

    fetch(`${db}/users/reset`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.status == "success") {
          toast.success(result.record);
          console.log("THIS IS A RESULT", result);
        } else if (result.status == "fail") {
          if (result.code == 400) {
            toast.error(result.record, { theme: "colored" });
            console.log("THIS IS A RESULT", result);
          } else if (result.code == 401) {
            toast.error(result.record, { theme: "colored" });
            console.log("THIS IS A RESULT", result);
          }
        }
      })
      .catch((error) => {
        console.log(values);
        toast.error("Internal sever error!", { theme: "colored" });
      });
  };




  return (
    <div className="reset-password">
      <div>
        <h2 className="reset-your-pwd">Reset your password?</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="reset-pwd-form">
          <input
            className="pwd-reset-fields"
            type="password"
            name="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            className="pwd-reset-fields"
            type="password"
            name="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="rest-pwd">
            Change password
          </button>
        </form>
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default ResetPassword;
