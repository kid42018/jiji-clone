import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledDropdownNavicon = styled.div`
@keyframes dropdown-animation{
    from{opacity:0;margin-top:50px;}
    to{opacity:1;margin-top:40px;}
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
        transform:scale(1.2);
        background-color:${Themes.primaryFade};
        color:${Themes.white};
        border:1px solid ${Themes.white};
        border-radius:100%;
        padding:5px;
        margin:0px 2px;
        transform:scale(1.2);
    }
    &:hover{
        .nav-dropdown{
            display:flex;
            animation:dropdown-animation 0.5s;
        }
    }
    .nav-dropdown{
        /* &:active{display:none;} */
        position:absolute;
        background-color:${Themes.white};
        margin-top:40px;
        display:none;
        flex-direction:column;
        white-space: nowrap;
        padding:0;
        min-width:150px;
        border-radius:5px;
        .nav-dropdown-list-cont{
           display:flex;
           align-items:center;
           padding:5px;
           span{
               margin-left:4px;
               color:rgb(166,184,189);
               font-size:0.9em;
           }
           svg{
               border-radius:100%;
               margin:0px 2px;
               border-color:transparent;
               background-color:transparent;
              color:transparent;
              transform:scale(0.8);
           }
           &:first-child > svg{
              background-color:${Themes.primaryFade};
              color:white;
          }
           &:hover{
               background-color:${Themes.darkGreyFade1};
           }
         }
         .nav-dropdown-divider{
             height:1px;
             background-color:${Themes.darkGreyFade2};
         }
       }
`