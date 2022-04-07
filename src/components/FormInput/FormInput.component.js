import React,{useState,useRef,useEffect} from 'react'
import { StyledFormInput } from './FormInput.styled'
import { Visibility,VisibilityOff,ArrowDropDown } from '@material-ui/icons';
import CountryCodes from '../../services/country-codes';
export default function FormInput({autoComplete = false,locationIndex,handelInput = (val) =>null,state}) {
const [showPlaceholder,setShowPlacehodler] = useState(true);
const [isPassword,setIsPassword] = useState(false);
const [isPhone,setIsPhone] = useState(false);
const [showPassword,setShowPassword] = useState(false);
const [isMouseOnDropDown,setIsMouseOnDropDown] = useState(false);
const [disableDropDownClose,setDisableDropDownClose] = useState(false);
const [selectedAreaCode, setSelectedAreaCode] = useState(locationIndex);
const [dropDownClose,setDropDownClose] = useState(true);
const [isInnerClick,setIsInnerClick] = useState(false);
const inputDoc = useRef(null);
useEffect(()=>{
  let temp = state.type === "password" ? true : false;
  let temp2 = state.type === "number" ? true : false;
  setIsPassword(temp);
  setIsPhone(temp2);
  if(inputDoc){
    inputDoc.current.parentElement
    .parentElement
    .parentElement
    .parentElement
    .parentElement.onclick = ()=>{
      setIsInnerClick(true);
    }
  }
},[]);
useEffect(()=>{
  if(inputDoc.current.value.trim()!==""&&showPlaceholder) setShowPlacehodler(false);
},[state]);
useEffect(()=>{
   if(isPassword) if(showPassword) inputDoc.current.type = "text";
   else inputDoc.current.type = "password";
},[showPassword]);
useEffect(()=>{
   if(isInnerClick)
     if(!isMouseOnDropDown)
        setDropDownClose(true);
   setIsInnerClick(false);
},[isInnerClick]);
 const handleOnBlur = (e)=>{
   if(e.target.value.trim()!==""||isMouseOnDropDown)
      setShowPlacehodler(false);
   else setShowPlacehodler(true);
   handelInput((isPhone ? CountryCodes[selectedAreaCode].dial_code : "")+e.target.value);
 }
 const handleOnFocus = (e)=>{
   setShowPlacehodler(false);
   handelInput((isPhone ? CountryCodes[selectedAreaCode].dial_code : "")+e.target.value);
 }
 const handleDropDownClick = ()=>{
   inputDoc.current.focus();
   if(!disableDropDownClose) {
     setDropDownClose(!dropDownClose);
   }else setDropDownClose(true);
}
const handleDropDownSelected = (i)=>{
  inputDoc.current.focus();
   setSelectedAreaCode(i);
   setDropDownClose(true);
}
return (
 <StyledFormInput> 
     <div className={`${state.isValid === null ? '' : (state.isValid === false ? 'error-border':'validated-border')}`} >
        <span onClick={()=>inputDoc.current.focus()} className={`${showPlaceholder ? '' : 'focused'} ${isPhone ? 'phone-container' : ''}`}>{state.placeholder}</span>
        {!showPlaceholder&&isPhone ? <div className='phone-code'>
                    <div onMouseEnter={()=>setIsMouseOnDropDown(true)} onMouseLeave={()=>setIsMouseOnDropDown(false)} onClick={handleDropDownClick} className="phone-code__selector-container">
                        <img  src={`https://flagcdn.com/16x12/${CountryCodes[selectedAreaCode].code.toLowerCase()}.png`} width="16" height="12" alt="" />
                        <span>{CountryCodes[selectedAreaCode].dial_code}</span>
                        <ArrowDropDown />
                    </div>
                    <div  onMouseEnter={()=>setIsMouseOnDropDown(true)} onMouseLeave={()=>setIsMouseOnDropDown(false)} className={`phone-code__options-container ${dropDownClose ? 'phone-code__options-container--hide' : ''}`}>
                        {CountryCodes.map((c,i)=>
                         <div key={i} onClick={()=>handleDropDownSelected(i)}>
                             <img  src={`https://flagcdn.com/16x12/${c.code.toLowerCase()}.png`} width="16" height="12" alt="" />
                             <span>{c.name}</span>
                             <span>{c.dial_code}</span>
                         </div>
                        )}
                    </div> 
       </div>: null}
       <input autoComplete={`${autoComplete ? 'on' : 'new-password'}`}   type={state.type} onChange={(e)=>handelInput((isPhone ? CountryCodes[selectedAreaCode].dial_code : "")+e.target.value)} ref={inputDoc} onFocus={(e)=>handleOnFocus(e)} onBlur={(e)=>handleOnBlur(e)} />
       {isPassword ? (showPassword ? <Visibility onClick={()=>setShowPassword(false)} /> :
       <VisibilityOff onClick={()=>setShowPassword(true)} />) : null}
     </div>
     <span className={`${state.isValid ? 'info' : ''}`}>{state.info}</span>
 </StyledFormInput> 
)
}
