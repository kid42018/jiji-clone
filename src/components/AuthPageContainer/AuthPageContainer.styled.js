import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledAuthPageContainer = styled.div`
   position: fixed;
   z-index: 20;
   top:0;
   bottom:0;
   left:0;
   right:0;
   background-color: rgba(0,0,0,0.8);
   display: flex;
   justify-content: center;
   align-items: center;
   overflow:auto;
   & > div{
       background-color: ${Themes.white};
       max-width:468px;
       flex:1;
       min-height: 468px;
       max-height:100%;
       height:auto;
       overflow: auto;
       box-sizing: border-box;
       border-radius:5px;
       display: flex;
       flex-direction: column;
       overscroll-behavior: contain;
       .close-contianer{
           display: flex;
           justify-content: flex-end;
           padding:5px;
           svg{
               color:${Themes.darkGrey};
           }
       }
   }
`
