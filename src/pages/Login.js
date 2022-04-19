<<<<<<< HEAD
<<<<<<< HEAD
import react,{useRef,useState,useEffect} from'react';
import * as FaIcons from "react-icons/fa";
// import * as yup from 'yup';
import * as EmailValidator from 'email-validator';
import {Formik} from 'formik'; 
import { Link } from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person';

const Login = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validate={values => {
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
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Password must contain atleast 1 number!";
      }
     return errors;
    }}>
   {props => {  const {  values, touched,  errors,   isSubmitting,  handleChange,  handleBlur,handleSubmit
      } = props;

      return (
  <div className="login-form">  
   <FaIcons.FaUserCircle className="icon"/> 
{/* <PersonIcon/> */}
       <div>
         <form onSubmit={handleSubmit} className="form">
        
          <input id="email-field" type="email" name="email" placeholder="Email"value={values.email}
  onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email && "error"}/> <br/>
  {errors.email && touched.email && (
  <div className="input-feedback">{errors.email}</div>
   )}
          
         
     <input id="pasword-field" type="password" name="password" placeholder="Password" 
       value={values.password}
       onChange={handleChange}
       onBlur={handleBlur}
       className={errors.password && touched.password && "error"}/>  <br/>
       {errors.password && touched.password && (
  <div className="input-feedback">{errors.password}</div>
)}<br/>
          
<h2 className="forgot-password"> <Link to="./">Forgot Password?</Link></h2> 
<input className="check-box"  type="checkbox"/> <label className="check-label" htmlFor="Stay loged in" >Stay loged in </label><br/>
   <Link to="/Logout">   <button type="submit" disabled={isSubmitting} className="login-button" id="btn">Login</button></Link>  
       
     </form>
     </div>
                                   
      </div>
     
 


        );
  
      }}
      
  </Formik>
);

export default Login;
 
=======
import LoginComponent from "../components/login/Login";
const Login = () => {
    return ( <LoginComponent/> );
=======
import LoginComponent from "../components/login/LoginComponent";
import UserNavbar from "../components/Navbars/UserNavbar";
import Footer from "../components/Footer/Footer";
const Login = () => {
    return (<div><div>
    <UserNavbar/></div> 
  <div> <LoginComponent/></div> 
  <div> <Footer/></div> 
  </div>
     );
>>>>>>> adding footer and nav-bar components
}
 
export default Login;
>>>>>>> resolving issues in login page
