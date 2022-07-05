import react, { useRef, useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as EmailValidator from "email-validator";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import LoginComponent from "../components/Login/LoginComponent";
import UserNavbar from "../components/Navbars/UserNavbar";
import Footer from "../components/Footer/Footer";

const Login = () => {
  return (
    <div>
      <div>
        <UserNavbar />
      </div>
      <div>
        <LoginComponent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
