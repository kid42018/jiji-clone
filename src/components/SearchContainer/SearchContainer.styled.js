import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledSearchContainer = styled.div`
  display:flex;
  background-color:${Themes.primaryDark};
  justify-content:center;
  height:305px;
  align-items:end;
  width:100%;
  img{
      height:250px;
      &:last-child{
          margin-right:0px;
      }
  }
  .search-container{
      color:${Themes.white};
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      height:100%;
      flex:1;
      max-width:500px;
      align-items:center;
      .location-container{
          display:flex;
          h1{
             font-size:1.1em;
             font-weight:200;
          }
          p{
              padding:0px 5px;
              border-radius:5px;
              font-size:0.8em;
              display:flex;
              align-items:center;
              background-color:${Themes.fadeBlack};
              svg{
                  transform:scale(0.6);
              }
          }
     }
  
  }
  @media only screen and (max-width: 1100px) {
    img{
        display:none;
    }
  }
  @media only screen and (max-width: 530px) {
       &{
           height:auto;
           background-color:transparent;
       }
       .location-container{
           display:none !important;
       }
  }
`