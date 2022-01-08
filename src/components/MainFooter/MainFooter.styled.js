import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledMainFooter = styled.div`
    display:flex;
    margin-top:10px;
    flex-direction:column;
    align-self:stretch;
    align-items:center;
    .footer-info-container{
        background-color:${Themes.primary};
        width:100%;
        display:flex;
        justify-content:space-evenly;
        flex-wrap:wrap;
        div{
            margin:5px;
            width:100%;
            max-width:150px;
            display:flex;
            flex-direction:column;
            align-items:start;
            span,img{
                &:first-child{
                    color:${Themes.primaryDark}  
                }
                color:${Themes.white};
                font-size:0.9em;
                margin-top:16px;
            }
        }
    }
    & > img{
        width:100%;
        max-width:862px;
    }
    & > span{
        background-color:${Themes.primary};
        font-size:0.8em;
        padding:20px 0px;
        width:100%;
        text-align:center;
        color:${Themes.primaryDark}
    }
`
