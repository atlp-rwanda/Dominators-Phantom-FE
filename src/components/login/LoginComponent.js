import react,{useRef,useState,useEffect} from'react';
import * as FaIcons from "react-icons/fa";
// import * as yup from 'yup';
import * as EmailValidator from 'email-validator';
import {Formik} from 'formik'; 
import { Link,useNavigate } from 'react-router-dom';

// import PersonIcon from '@mui/icons-material/Person';
import "./Login.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../utils/db';



const LoginComponent = () => {
  const [users,setUsers] = useState(null);
  const [loading,setIsLoading] = useState(false);
  const redirect = useNavigate();
  useEffect(()=>{
    
  })

  const handleLogin = (values)=>{
    console.log(db)
   setIsLoading(true)
   let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify({
       "email":values.email,
       "password":values.password
   });
   
   fetch(`${db}/api/v1/users/login`, { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   })
    .then((res)=>{
      return res.json();
    })
    .then ((result)=>{
      console.log(result)
      if(result.status=="success"){
           toast.info("User logiged in successfully ")
           
           localStorage.setItem("token",result.token)
           if(result.data.user.role=="admin"){
            redirect("/update-profile")
             
           }
           else
           {

           }
           
         }
         else {
           toast.error("Invalid email or password",{theme:"colored"});
         }
  setIsLoading(false)
    })
    .catch((error)=>{
      
      toast.error("Internal sever erroe!",{theme:"colored"});
      setIsLoading(false)
      console.log(error)
    })

//     users.map((user)=>{
      
//  if((user.email === values.email) && (user.password === values.password)){
//    toast.info("User logiged in successfully ")
   
//    localStorage.setItem("token","toke33nphantddomfaketokensdgdgss")
//    redirect("/dashboard")
   
//  }
//  else {
//    toast.error("Invalid email or password",{theme:"colored"});
//  }


//     })



  }
        


  

  return ( 
    

  <Formik
  initialValues={{ email: "", password: "" }}
  onSubmit={values => handleLogin(values)}
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
       <form  onSubmit ={handleSubmit} className="form">
      
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
        
<h2 className="forgot-password"> <Link to="/Reset-link">Forgot Password?</Link></h2> 
<input className="check-box"  type="checkbox"/> <label className="check-label" htmlFor="Stay logged in" >Stay loged in </label><br/>
    <button type="submit"  className="login-button" id="btn">{loading ? "Loading...":"Login"}</button>  
     
   </form>
   </div>
   <ToastContainer/>                          
    </div>
   



      );

    }}
    
</Formik>

);

   
}
 
export default LoginComponent ;
 