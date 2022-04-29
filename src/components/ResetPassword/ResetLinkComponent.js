import react,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./ResetPasswordLink.css";
import * as FaIcons from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ResetPasswordLink = () => {
  const[email,setEmail]= useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
      if(validateEmail()){
        toast.info("check your email!");
      }
        
          }
const validateEmail = ()=>{
  if(email===""){
    toast.error("Email required")
    return false
  }
  if (
    email.indexOf("@") < 1 ||
    email.lastIndexOf(".") - email.indexOf("@") < 2
  ) {
    toast.error("invalid email format")
    return false;
  }
  return true
}
    return ( 
        <div className="reset-link">  
        <div>
            <h2>Forgot your password?</h2>
            <p>Enter your email address and we will send you <br/>alink to reset your password</p>
        </div>
       <div>
         <form onSubmit={handleSubmit} className="reset-form">
        
          <input id="pwd-reset-field" type="text" name="email" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
          {/* <span>  
          <FaIcons.FaEnvelope className="envilope"/> 
          </span> */}
           <button type="submit"className="submit-button" id="submit-btn">Send link</button> 
          </form>
          </div>
          <ToastContainer theme="colored"/>
            </div>
    )}
 
export default ResetPasswordLink;