import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledFormInput = styled.div`
   & > div{
       border:1px solid lightgrey;
       border-radius:5px;
       padding:5px;
       display: flex;
       margin-top:10px;
       background-color: ${Themes.white};
       position: relative;
       &.error-border{
           border-color: red;
       }
       &.validated-border{
           border-color: ${Themes.primary};
       }
       & > span{
           position: absolute;
           margin-left:5px;
           margin-top:5px;
           font-size:0.9em;
           background-color: ${Themes.white};
           padding:5px;
           transition: all 0.2s;
           color:${Themes.darkGrey};
           &.focused{
            margin-top:-15px;
            font-size:0.7em;
            color:${Themes.fadeBlack};
           }
       }
       input{
           background-color: ${Themes.white};
           padding: 10px;;
           flex:1;
           font-size: 0.9em;
           border:none;
           outline:0;
       }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
        border:none;
           -webkit-text-fill-color: ${Themes.fadeBlack};
           -webkit-box-shadow: 0 0 0px 1000px ${Themes.white} inset;
        }
       svg{
           color:${Themes.fadeBlack};
           align-self: center;
           transform: scale(0.8);
           opacity:0.6;
       }
       .phone-code{
              background-color: transparent;
              box-sizing:border-box;
              z-index: 10000000000;
              .phone-code__selector-container{
                cursor: pointer;
                min-width:100px;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                height:100%;
              }
              &__options-container{
                  position: absolute;
                  background-color: ${Themes.white};
                  box-shadow:1px 1px 5px ${Themes.darkGrey};
                  z-index: 50;
                  overflow: auto;
                  max-height:250px;
                  max-width: 100%;
                  display: flex;
                  flex-direction: column;
                  margin-top:15px;
                  border-radius: 5px;
                  padding:10px;
                  box-sizing:border-box;
                  &--hide{
                      display: none !important;
                  }
                  & > div{
                      background-color: ${Themes.white};
                      padding:5px;
                      border-radius:3px;
                      display: flex;
                      & > * {
                          padding:3px;
                          font-size:0.9em;
                      }
                      &:hover{
                          cursor: pointer;
                          background-color: ${Themes.darkGreyFade1};
                      }
                  }
              }
       }
   }
   & > span{
       font-size:0.8em;
       color:red;
       margin-left:10px;
       &.info{
               color:gray;
           }
   }
`
