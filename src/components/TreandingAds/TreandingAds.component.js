import React,{useEffect} from 'react'
import { StyledTreandingAds } from './TreandingAds.styled'
import {TreandingAd} from "..";
import data from "./trendings.json";
export default function TreandingAds() {
return (
 <StyledTreandingAds> 
     <h1>Treanding Ads</h1>
     <div className="treanding-ads-cont">
        {data.adverts_list.map((d,i)=>
           <TreandingAd key={i} price={d.price} numberOfImages={d.images_count} title={d.title} image={d.image} />
        )}
     </div>
 </StyledTreandingAds> 
)
}
