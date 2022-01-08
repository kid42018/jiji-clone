import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledSerachBox = styled.div`
  width:100%;
  margin:0;
  display:flex;
  flex-direction:column;
  position:relative;
 .input-box{
     background-color:${Themes.white};
     display:flex;
     flex:1;
     padding:15px;
     margin:5px;
     overflow:hidden;
     input{
         flex:1;
         border:none;
         outline:0;
         color:${Themes.fadeBlack};
     }
     svg{
         color:${Themes.primary}
     }
 }
 .search-result-box{
     position:absolute;
     width:100%;
     background-color:${Themes.white}; 
     margin:5px;
     margin-top:70px;
     max-height:300px;
     align-self:center;
     border-radius:5px;
     overflow: auto;
     z-index:9999;
     .result-container{
        color:${Themes.fadeBlack};
        padding:15px 10px;
        display:flex;
        justify-content:space-between;
        word-break:break-all;
        svg{
            color:${Themes.primary};
            transform:rotate(-45deg) scale(0.8);
        }
        &:hover{
            cursor:pointer;
            background-color:${Themes.darkGreyFade2}
        }
     }
 }
 @media only screen and (max-width: 530px) {
    .input-box{
        padding:10px !important;
    }
}
`