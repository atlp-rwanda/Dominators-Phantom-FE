import "./ResetPassword.css";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    return ( 
        <div className="reset-password">  
        <div>
            <h2 className="reset-your-pwd">Reset your password?</h2>
            
        </div>
       <div>
         <form className="reset-pwd-form">
        
          <input className="pwd-reset-fields" type="email" name="email" placeholder="Email address"/><br/>
          <input className="pwd-reset-fields" type="password" name="password" placeholder="Enter new password"/><br/>
          <input className="pwd-reset-fields" type="password" name="password" placeholder="Confirm your password"/><br/>
     <button type="submit"className="rest-pwd">Change password</button>
          </form>
          </div>
          
            </div>
     );
}
 
export default ResetPassword;