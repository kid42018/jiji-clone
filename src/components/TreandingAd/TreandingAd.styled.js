import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledTreandingAd = styled.div`
    background:${Themes.white};
    padding-bottom:100%;
    border-radius:5px;
    position:relative;
    overflow:hidden;
    .ad-container{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display:flex;
        flex-direction:column;
        & > div:first-child{
            overflow:hidden;
            flex:1;
            display:flex;
            background-size:100% auto;
            span{
                color:white;;
                margin-top:auto;
                padding:5px;
                background-color:rgba(0,0,0,0.5);
                font-size:0.7em;
                border-top-right-radius: 7px;
            }
        }
        & > div:last-child{
            
            display:flex;
            flex-direction:column;
            svg{
                cursor:pointer;
                align-self:end;
                margin-right:5%;
                margin-top:-8%;
                background-color:${Themes.white};
                padding:2%;
                box-shadow:1px 1px 3px ${Themes.darkGrey};
                border-radius:100%;
                color:${Themes.primary};

            }
            p,span{
                font-size:0.9em;
                padding-left:5%;
                overflow:hidden;
            }
            p{
                white-space: nowrap;
                color:${Themes.fadeBlack};
                margin-bottom:2px;
                margin-right:5%;
            }
            span{
                color:${Themes.primary};
                margin-bottom:5px;
            }
        }
    }

`
