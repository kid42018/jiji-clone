import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledTreandingAds = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    margin:auto;
    h1{
        font-size:1.4em;
        padding:5px;
        color:${Themes.fadeBlack}
    }
    .treanding-ads-cont{
       display:grid;
       grid-template-columns:repeat(4,1fr);
       flex:1;
       gap:10px;
    }
    @media screen and (max-width:700px){
        .treanding-ads-cont{
            grid-template-columns:repeat(2,1fr);
        }
    }
`
