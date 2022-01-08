import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledNavIcon = styled.div`
@keyframes dropdown-animation2{
    from{opacity:0;margin-top:50px;}
    to{opacity:1;margin-top:35px;}
}
@media only screen and (max-width: 530px) {
    &{
       transform:scale(0.8);
    }
  }
    flex:1;
    cursor:pointer;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    svg{
        background-color:${Themes.white};
        color:${Themes.darkGrey};
        border-radius:100%;
        padding:5px;
        margin:0px 2px;
        transform:scale(0.9);
    }
    svg.nav-active{
        color:${Themes.primary};
    }
    span{
        position:absolute;
        margin-top:35px;
        font-size:0.9em;
        background-color:${Themes.fadeBlack};
        padding:5px;
        border-radius:5px;
        white-space: nowrap;
        display:none;
        z-index:5;
     }
     &:hover > span{
        display:flex;
        animation:dropdown-animation2 0.5s;
     }
    p{
        position:absolute;
        background-color:${Themes.niceRed};
        color:${Themes.white};
        font-size:0.8em;
        padding:5px;
        min-width:10px;
        height:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-left:20px;
        border-radius:50px;
        bottom:0;
    }
`