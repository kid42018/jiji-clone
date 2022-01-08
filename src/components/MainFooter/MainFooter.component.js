import React from 'react'
import { StyledMainFooter } from './MainFooter.styled'
import FooterEthiopia from "../../assets/footer-ethiopia.svg"
import AppStoreIcon from "../../assets/ios.svg"
export default function MainFooter() {
return (
 <StyledMainFooter> 
     <img src={FooterEthiopia} />
     <div className='footer-info-container'>
        <div>
           <span>About us</span>
           <span>About Jiji</span>
           <span>Terms & conditions</span>
           <span>Privacy Policy</span>
           <span>Billing Policy</span>
        </div>
        <div>
           <span>Support</span>
           <span>support@jiji.com.et</span>
           <span>Safety Tips</span>
           <span>Contact Us</span>
           <span>FAQ</span>
        </div>
        <div>
           <span>Our Apps</span>
           <img src={AppStoreIcon} alt=""/>
           <img src={AppStoreIcon} alt=""/>
        </div>
        <div>
           <span>Our resources</span>
           <span>Jiji on FB</span>
           <span>Our Instagram</span>
           <span>Our Youtube</span>
           <span>Our Twitter</span>
        </div>
        <div>
           <span>Hot links</span>
           <span>Brand</span>
           <span>Jiji Sellers</span>
           <span>Regions</span>
           <span>Jiji Africa </span>
        </div>
     </div>
     <span>@2021 Jiji.com.et</span>
 </StyledMainFooter> 
)
}
