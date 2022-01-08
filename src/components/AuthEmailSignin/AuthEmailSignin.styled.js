import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledAuthEmailSignin = styled.div`
   max-width:355px;
   align-self: center;
   width:100%;
   padding:5px;
   display: flex;
   flex-direction: column;
   color:${Themes.fadeBlack};
   box-sizing:border-box;
   & > p{
      font-size:0.8em;
   }
   & > form{
      & > span{
         color:${Themes.primary};
         width:100%;
         display: block;
         text-align: right;
         font-size:0.8em;
         font-weight: bold;
      }
      & > button{
         width:100%;
         font-size:1.05em;
         height:50px;
         font-weight: bold;
         border:none;
         border-radius:5px;
         color:${Themes.white};
         background-color: ${Themes.primary};
         &:disabled{
            opacity: 0.5;
         }
      }
   }
   & > h5{
      text-align: center;
      font-weight: 100;
      & > span{
         cursor: pointer;
         color:${Themes.primary};
         font-weight: 700;
      }
   }
   & > div{
      display: flex;
      & > hr{
         flex:1;
         align-self: center;
         opacity: 0.3;
      }
      & > span{
         padding: 5px;
      }
   }
   & > div:last-of-type{
        display: flex;
        justify-content: space-evenly;
        & > span{
           flex:1;
           display: flex;
           justify-content: space-evenly;
           align-items: center;
           box-shadow: 0px 0px 5px lightgray;
           border-radius:5px;
           padding:10px;
           &:first-child{
              margin-right:10px;
              background-color: ${Themes.white};
           }
           &:last-child{
              margin-left:10px;
              background-color: ${Themes.fbColor};
              color:${Themes.white};
           }
        }
        img{
           width:15%;
        }
   }
`
