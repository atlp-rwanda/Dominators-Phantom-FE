import react from "react";
import { Link } from "react-router-dom";
import "./ResetPasswordLink.css";
import * as FaIcons from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPasswordLink = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("me");
        toast.info("check your email!",{theme:"colored"});
          }

    return ( 
        <div className="reset-link">  
        <div>
            <h2>Forgot your password?</h2>
            <p>Enter your email address and we will send you alink to reset your password</p>
        </div>
       <div>
         <form onSubmit={handleSubmit} className="reset-form">
        
          <input id="pwd-reset-field" type="email" name="email" placeholder="Email address"/><br/>
          {/* <span>  
          <FaIcons.FaEnvelope className="envilope"/> 
          </span> */}
           <button type="submit"className="submit-button" id="submit-btn">Send link</button> 
          </form>
          </div>
          <ToastContainer/>
            </div>
    )}
 
export default ResetPasswordLink;