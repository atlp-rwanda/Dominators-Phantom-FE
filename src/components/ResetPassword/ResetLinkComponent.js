import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ResetPasswordLink.css";
import * as FaIcons from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../utils/db";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";

const ResetPasswordLink = () => {
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
    <>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => handleReset(values)}
      >
        {(props) => {
          const { values, handleChange, handleSubmit } = props;

          return (
            <div className="container">
              <div>
                <h2>Forgot your password?</h2>
                <p>
                  Enter your email address and we will send you <br />
                  alink to reset your password
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="reset-form">
                  <input
                    id="pwd-reset-field"
                    type="text"
                    name="email"
                    placeholder="Email address"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <br />
                  <button
                    type="submit"
                    className="submit-button"
                    id="submit-btn"
                  >
                    Send link
                  </button>
                </form>
              </div>
              <ToastContainer theme="colored" />
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default ResetPasswordLink;
