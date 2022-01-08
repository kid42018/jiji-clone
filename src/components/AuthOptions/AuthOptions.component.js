import React,{useEffect} from 'react'
import { StyledAuthOptions } from './AuthOptions.styled'
import GoogleIcon from "../../assets/icons-google.svg";
import FacebookIcon from "../../assets/icons-facebook.svg";
import { useDispatch} from 'react-redux';
import {setUser} from "../../redux/reducers.js/user.reducer.js";
export default function AuthOptions({nameTitle,gotoAuth}) {
const dispatch = useDispatch();
const handleClick = ()=>{
    dispatch(setUser(true));
    gotoAuth(-1);
};
return (
 <StyledAuthOptions> 
     <p>{nameTitle}</p>
     <div onClick={handleClick} className='auth-btn'>
         <img src={GoogleIcon} />
         <h1>{nameTitle} via Google</h1>
     </div>
     <div onClick={handleClick} className='auth-btn fb-color'>
         <img src={FacebookIcon} />
         <h1>{nameTitle} via Facebook</h1>
     </div>
     <div className='or-container'>
         <hr/>
         <span>or</span>
         <hr/>
     </div>
     <div onClick={()=>{if(nameTitle==="Sign in") gotoAuth(3); else gotoAuth(4);}} className='auth-btn other-auth-color'>
         <h1>{nameTitle} via e-mail or phone</h1>
     </div>
     {nameTitle==="Sign in" ? 
              <p>Don't have an accout?&nbsp;<span onClick={()=>gotoAuth(2)}>Registration</span></p>: 
              <p>Already have an account?&nbsp;<span onClick={()=>gotoAuth(1)}>Sign in</span></p>
    }
 </StyledAuthOptions> 
)
}
