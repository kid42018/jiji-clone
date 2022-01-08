import styled from "styled-components";
import Themes, { Theme } from "../../style/Theme";
export const StyledAuthOptions = styled.div`
   max-width:355px;
   align-self: center;
   width:100%;
   padding:5px;
   display: flex;
   flex-direction: column;
   color:${Themes.fadeBlack};
   box-sizing:border-box;
   p{
       font-size:0.8em;
   }
   p:last-child{
       margin-top:20px;
       display: flex;
       justify-content:center;
       span{
           cursor: pointer;
           color:${Themes.primary};
           font-weight: bold;
       }
   }
   .auth-btn{
       cursor:pointer;
       background-color:white;
       padding:15px;
       display: flex;
       box-shadow:1px 1px 4px lightgrey;
       border-radius:5px;
       margin-top:20px;
       &.fb-color{
           background-color: ${Themes.fbColor};
           h1{
            color:${Themes.white};
           }
       }
       &.other-auth-color{
           background-color: ${Themes.primary};
           h1{
               color:${Themes.white}
           }
       }
       img{
           width:7%;
       }
       h1{
           flex:1;
           text-align:center;
           font-size:1em;
           color:#606060;
       }
   }
   .or-container{
       display: flex;
       margin-top:20px;
       span{
           padding:5px;
       }
       hr{
           flex:1;
           opacity: 0.3;
           align-self: center;
       }
   }
`
