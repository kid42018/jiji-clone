import React,{useState,useEffect} from 'react'
import { StyledAuthEmailRegistration } from './AuthEmailRegistration.styled'
import validator,{ passwordValidator, requiredFieldValidator,emailValiditor ,phoneValidator} from '../../services/validator';
import GoogleIcon from "../../assets/icons-google.svg";
import FacebookIcon from "../../assets/icons-facebook.svg";
import {FormInput} from "..";
import { useSelector,useDispatch } from 'react-redux';
import CountryCodes from '../../services/country-codes';
import {setUser} from "../../redux/reducers.js/user.reducer.js";
import { getLocation } from "../../redux/reducers.js/app-setting.reducer";
import Request from '../../services/requests';
export default function AuthEmailRegistration({gotoAuth}) {
const [emailInput , setEmailInput] = useState({value:"",type:"email",isValid:null,info:"",placeholder:"Enter email"});
const [passwordInput , setPasswordInput] = useState({value:"",type:"password",isValid:null,info:"",placeholder:"Password"});
const [firstNameInput , setFirstNameInput] = useState({value:"",type:"text",isValid:null,info:"",placeholder:"First name"});
const [lastNameInput , setLastNameInput] = useState({value:"",type:"text",isValid:null,info:"",placeholder:"Last name (optional)"});
const [phoneInput , setPhoneInput] = useState({value:"",type:"number",isValid:null,info:"",placeholder:"Phone number (digits only)"});
const [formValidated,setFormValidated] = useState(false);
const [formLoading,setFormLoading] = useState(false);
const [agreeRules,setAgreeRules] = useState(false);
const dispatch = useDispatch();
const locationIndex  = useSelector((state) => state.appSetting.location);
useEffect(() => {
  Request.get.getLocation(data=>{
          let loc = 0;
          CountryCodes.find((c,i)=>{
              loc = i;
              return c.code===data.data.country_code
          });
          dispatch(getLocation({ type: 'getLocation',payload:loc }));
  });
}, [dispatch]);
useEffect(()=>{
   let isValid = true;
   if(!emailInput.isValid) isValid = false; 
   else if(!passwordInput.isValid) isValid = false;
   else if(!firstNameInput.isValid) isValid = false;
   else if(!phoneInput.isValid)     isValid = false;
   else if(!agreeRules)             isValid = false; 
   setFormValidated(isValid);
},[agreeRules, emailInput,passwordInput,firstNameInput,lastNameInput,phoneInput]);
const handelEmailInput = (val)=>{
  const {message,result} = validator(val,[requiredFieldValidator,emailValiditor]);
  setEmailInput({...emailInput,isValid:result,info:message});
}
const handelPasswordInput= (val)=>{
  const {message,result} = validator(val,[requiredFieldValidator,passwordValidator]);
  setPasswordInput({...passwordInput,isValid:result,info:message});
}
const handelFirstNameInput= (val)=>{
  const {message,result} = validator(val,[requiredFieldValidator]);
  setFirstNameInput({...firstNameInput,isValid:result,info:message});
}
const handelLastNameInput= (val)=>{
  const {message,result} = validator(val,[]);
  setLastNameInput({...lastNameInput,isValid:result,info:message});
}
const handelPhoneInput= (val)=>{
  const {message,result} = validator(val,[phoneValidator]);
  setPhoneInput({...phoneInput,isValid:result,info:message});
}
const handleTestLogin = ()=>{
  dispatch(setUser(true));
  gotoAuth(-1);
}
  const registerUser = async (e)=>{
     e.preventDefault();
    if(formValidated){
      setFormLoading(true);
      await new Promise((res)=>setTimeout(()=>res(),3000));
      setFormLoading(false);
      handleTestLogin();
       //setEmailInput({...emailInput,isValid:false,info:"invalid email"});
    }
  }
return (
 <StyledAuthEmailRegistration> 
        <p>Register in via email or phone</p>
     <form autoComplete='off' onSubmit={(e)=>registerUser(e)}> 
        <FormInput state={emailInput} handelInput={(val)=>handelEmailInput(val)}  />
        <br/>
        <FormInput state={passwordInput} handelInput={(val)=>handelPasswordInput(val)}  />
        <br/>
        <FormInput state={firstNameInput} handelInput={(val)=>handelFirstNameInput(val)}  />
        <br/>
        <FormInput state={lastNameInput} handelInput={(val)=>handelLastNameInput(val)}  />
        <br/>
        <FormInput locationIndex={locationIndex} state={phoneInput} handelInput={(val)=>handelPhoneInput(val)}  />
        <br/>
         <span><input checked={agreeRules} onChange={(e)=>setAgreeRules(e.target.checked)} type="checkbox" />&nbsp;&nbsp;I agree with our rules</span>
        <br/>
        <button type="submit" disabled={!formValidated}>{formLoading ? <img src="/assets/loading.svg" alt="" /> : "REGISTER"}</button>
     </form>
     <br/>
     <h5>Already have an Account?&nbsp;<span onClick={()=>gotoAuth(1)}>Sign in</span></h5>
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
 </StyledAuthEmailRegistration> 
)
}