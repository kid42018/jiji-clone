import React from 'react'
import { StyledTreandingAds } from './TreandingAds.styled'
import {TreandingAd} from "..";
export default function TreandingAds() {
return (
 <StyledTreandingAds> 
     <h1>Treanding Ads</h1>
     <div className="treanding-ads-cont">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(d=>
           <TreandingAd price="1500" numberOfImages={4} title="Orginal Samsung Galaxy Phone" image="https://pictures-ethiopia.jijistatic.com/599270_MzAwLTQwMC02MDVhNTkwZDkw.jpg" />
        )}
     </div>
 </StyledTreandingAds> 
)
}
