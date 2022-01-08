import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledCatagorieSideBar = styled.div`
    height:505px;
    min-width:305px;
    color:${Themes.darkGrey};
    position:sticky;
    top:66px;
    background-color:${Themes.white};
    flex:1;
    display:flex;
    box-shadow:1px 1px 3px ${Themes.darkGrey};
    margin-top:10px;
    z-index:9;
    &:hover > .sub-catagorie-box{
            display: flex !important;
    }
    .scroll-down{
           bottom: 0;
           background-image: linear-gradient(transparent,${Themes.niceGrey});
           svg{
            transform: rotate(90deg) scale(0.7);
           }
    }
    .scroll-up,.scroll-down{
        position: absolute;
        height: 50px;
        left:0;
        right:0;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
            color:${Themes.fadeBlack};
            opacity: 0.5;
        }
    }
    .scroll-up{
           top: 0;
           background-image: linear-gradient(${Themes.niceGrey},transparent);
           svg{
            transform: rotate(-90deg);
           }
    }
    .catagorie-container-box,.sub-catagorie-box > div{
        background-color: ${Themes.white};
        height:auto;
        overflow: auto;
        width:305px;
        scroll-behavior: smooth;
        display: flex;
        flex-direction: column;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
        & > div{
            display: flex;
            padding:10px;
            padding-top:0px;
            align-items: center;
            transition: background-color 0.5s;
            &:hover{
                cursor: pointer;
                background-color: ${Themes.darkGreyFade2};
            }
            img{
                width:40px;
                height:auto;
                align-self: flex-start;
            }
            span{
                flex:1;
                margin-left:5px;
                h1{
                    font-size: 0.95em;
                    font-weight: 100;
                    color:${Themes.fadeBlack};
                    opacity:0.8;
                }
                p{
                    font-size: 0.8em;
                    color:${Themes.fadeBlack}
                }
            }
            svg{
                color:${Themes.fadeBlack};
                transform: scale(0.5);
            }
        }
    }
    .sub-catagorie-box{
        border-left:2px  solid ${Themes.primary};
        display: none;
        height:505px;
        background-color: ${Themes.white};
        height:505px;
        position: absolute;
        margin-left:305px;
        z-index:69999999999990;
        overflow: hidden;
     
    }
    @media screen and (max-width:1115px){
       &{
           display:none;
       }
     }
`