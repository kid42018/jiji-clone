import React,{useState,useEffect} from 'react'
import { StyledAuthEmailSignin } from './AuthEmailSignin.styled'
import validator,{} from '../../services/validator';
import GoogleIcon from "../../assets/icons-google.svg";
import FacebookIcon from "../../assets/icons-facebook.svg";
import {FormInput} from "..";
import {useDispatch } from 'react-redux';
import {setUser} from "../../redux/reducers.js/user.reducer.js";
export default function AuthEmailSignin({gotoAuth}) {
const [emailInput , setEmailInput] = useState({value:"",type:"email",isValid:null,info:"",placeholder:"Enter email"});
const [passwordInput , setPasswordInput] = useState({value:"",type:"password",isValid:null,info:"",placeholder:"Password"});
const [formValidated,setFormValidated] = useState(false);
const dispatch = useDispatch();
useEffect(()=>{
  let isValid = true;
  if(!emailInput.isValid) isValid = false; 
  else if(!passwordInput.isValid) isValid = false;
  setFormValidated(isValid);
},[emailInput,passwordInput]);
const handelEmailInput = (val)=>{
  const {message,result} = validator(val,[]);
  setEmailInput({...emailInput,isValid:result,info:message});
}
const handelPasswordInput= (val)=>{
  const {message,result} = validator(val,[]);
  setPasswordInput({...passwordInput,isValid:result,info:message});
}
const handleTestLogin = ()=>{
  dispatch(setUser(true));
  gotoAuth(-1);
}
const signinUser = (e)=>{
  e.preventDefault();
 if(formValidated){
   handleTestLogin();
   // setEmailInput({...emailInput,isValid:false,info:"invalid email"});
 }
}
return (
 <StyledAuthEmailSignin> 
      <p>Sign in via email or phone</p>
     <form onSubmit={(e)=>signinUser(e)}> 
        <FormInput autoComplete={true} state={emailInput} handelInput={(val)=>handelEmailInput(val)}  />
        <br/>
        <FormInput autoComplete={true} state={passwordInput} handelInput={(val)=>handelPasswordInput(val)}  />
        <br/>
        <span>Forgot your password</span>
        <br/>
        <button type="submit" disabled={!formValidated}>SIGN IN</button>
     </form>
     <br/>
     <h5>Don't have an Account?&nbsp;<span onClick={()=>gotoAuth(2)}>Registration</span></h5>
     <div>
       <hr/><span>or</span><hr/>
     </div>
     <br/>
     <div>
       <span onClick={handleTestLogin}>
         <img src={GoogleIcon} alt=""/>
         <span>via Google</span>
       </span>
       <span onClick={handleTestLogin}>
         <img src={FacebookIcon} alt=""/>
         <span>via Facebook</span>
       </span>
     </div>
     <br/>
     <br/>
    </StyledAuthEmailSignin> 
)
}
