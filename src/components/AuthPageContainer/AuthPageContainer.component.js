import React,{useEffect} from 'react'
import { StyledAuthPageContainer } from './AuthPageContainer.styled'
import { Close } from '@material-ui/icons'
import { useDispatch,useSelector } from 'react-redux';
import { setCurrentAuthPage } from '../../redux/reducers.js/app-setting.reducer';
import {AuthOptions,AuthEmailSignin,AuthEmailRegistration} from "..";
export default function AuthPageContainer({authSelected = 1}) {
    const currentAuthPage  = useSelector((state) => state.appSetting.currentAuthPage);
    const dispatch = useDispatch();
    const gotoAuth = index=>{
        dispatch(setCurrentAuthPage(index));
    }
    const hideContainer = ()=>{
        dispatch(setCurrentAuthPage(-1));
    }
    useEffect(()=>{
        dispatch(setCurrentAuthPage(authSelected));
    },[]);
return (
 <StyledAuthPageContainer  onClick={hideContainer}> 
     <div onClick={(e)=>e.stopPropagation()}>
         <div className='close-contianer'>
             <Close onClick={hideContainer} />
         </div>
         {
          (()=>{
            switch(currentAuthPage){
            case -1:
                break;
             case 1:
                 return  <AuthOptions gotoAuth={gotoAuth} nameTitle="Sign in" />
             case 2:
                return  <AuthOptions  gotoAuth={gotoAuth} nameTitle="Register" />
             case 3:
                 return <AuthEmailSignin  gotoAuth={gotoAuth} />
            case 4:
                return <AuthEmailRegistration  gotoAuth={gotoAuth} />
            }
           })()
         }
     </div>
 </StyledAuthPageContainer> 
)
}
