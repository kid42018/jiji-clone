import React from 'react'
import { StyledHeader } from './Header.styled';
import jijiLogo from  "../../assets/images/jiji logo.png";
import NavLoged from '../NavLoged/NavLoged.component';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentAuthPage} from '../../redux/reducers.js/app-setting.reducer';
import { Link } from 'react-router-dom';
import AuthPageContainer from '../AuthPageContainer/AuthPageContainer.component';
export default function Header() {
    const  user  = useSelector((state) => state.user.user);
    const  currentAuthPage  = useSelector((state) => state.appSetting.currentAuthPage);
    const dispatch = useDispatch();
    return (
         <StyledHeader>
             {currentAuthPage===-1||user ? null : <AuthPageContainer authSelected={currentAuthPage} />}
             <div className='logo-container'>
               <Link to="/"><img src={jijiLogo} alt=""/></Link> 
             </div>
             <span className="moto">SELL FASTER, BUY SMARTER</span>
             <div className="right-container">
                 {
                     user ?    <NavLoged /> : 
                    <div>
                        <span onClick={()=>dispatch(setCurrentAuthPage(1))} className='account-btn'>Sign in</span>
                        <span> | </span>
                        <span onClick={()=>dispatch(setCurrentAuthPage(2))} className='account-btn'>Registration</span>
                     </div>   
                 }
             
             <Link to="/sale"><button className="sell-btn">SELL</button></Link>
             </div>
         </StyledHeader>
    )
}
