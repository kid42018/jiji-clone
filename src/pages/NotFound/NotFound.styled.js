import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledNotFound = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height:100vh; 
 h1{
     color:${Themes.darkGrey};
     font-weight:100;
     b{
         color:${Themes.niceRed};
     }
 }
`
