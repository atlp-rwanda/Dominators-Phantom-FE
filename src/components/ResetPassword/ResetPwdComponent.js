import "./ResetPassword.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import react,{useState,useEffect} from "react";

const ResetPassword = () => {
 const[password,setPassword] = useState("")
 const[confirmPassword,setConfirmPassword] = useState("")

 const handleSubmit = (e)=>{
  e.preventDefault();
  if(validatePassword()){
    if(password===confirmPassword){
      toast.info("password reseted success full")
    }
  
    else{
      toast.error("password mismatch")
    }

  }
  

}
const validatePassword = ()=>{
  if(password ==""|| confirmPassword ==""){
    toast.error("fields can not be empty")
    return false
  }
  return true
}
    return ( 
        <div className="reset-password">  
        <div>
            <h2 className="reset-your-pwd">Reset your password?</h2>
            
        </div>
       <div>
         <form onSubmit ={handleSubmit} className="reset-pwd-form">
        
         
          <input className="pwd-reset-fields" type="password" name="password" placeholder="Enter new password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
          <input className="pwd-reset-fields" type="password" name="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
     <button  type="submit"className="rest-pwd">Change password</button>
   
          </form>
          </div>
          <ToastContainer theme="colored"/>
            </div>
     );
}
 
export default ResetPassword;