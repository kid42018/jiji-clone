import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledHeader = styled.div`
    background-color:${Themes.primary};
    min-height:56px;
    color:${Themes.white};
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    position:sticky;
    top:0;
    z-index:10;
    box-shadow:0px 0px 5px rgba(100,100,100,0.5);
    .moto{
        opacity:0.5;
    }
    .logo-container{
       cursor:pointer;
       margin:0px 30px;
       height:40px;
    }
    .right-container{
        flex:1;
        max-width:500px;
        display:flex;
        justify-content:right;
        align-items:center;
        .account-btn{
            cursor:pointer;
            font-size:0.8em;
        }
    }
    .sell-btn{
        height:40px;
        margin:0px 30px;
        cursor:pointer;
        background-color:${Themes.darkOrange};
        border:none;
        outline:0;
        width:100px;
        border-radius:5px;
        color:white;
        transition: background-color 0.5s;
        &:hover{
            background-color:${Themes.darkOrangeFade};
        }
    }
    @media only screen and (max-width: 830px) {
        .moto{
            display:none;
        }
    }
    @media only screen and (max-width: 530px) {
        &{
            position:relative;
        }
        .sell-btn{
           margin:0 !important;
           transform:scale(0.8);
        }
        .logo-container{
            display:none;
        }
      }
`