import { Link } from "react-router-dom";
import "./ResetPasswordLink.css";

const ResetPasswordLink = () => {

    return ( 
        <div className="reset-link">  
        <div>
            <h2>Forgot your password?</h2>
            <p>Enter your email address and we will send you alink to reset your password</p>
        </div>
       <div>
         <form className="reset-form">
        
          <input id="pwd-reset-field" type="email" name="email" placeholder="Email address"/><br/>
          <Link to="/reset-pwd">   <button type="submit"className="submit-button" id="submit-btn">Send link</button></Link>  
          </form>
          </div>
          
            </div>
    )}
 
export default ResetPasswordLink;