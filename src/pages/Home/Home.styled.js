import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledHomePage = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   main{
      padding:10px;
      padding-top:0px;
      width:100%;
      box-sizing:border-box;
      max-width:1300px;
      display:grid;
      gap:10px;
      grid-template-columns:auto 1fr;
      justify-items:stretch;
   }
   @media screen and (max-width:1115px){
      main{
         grid-template-columns:1fr;
      }
    }
`