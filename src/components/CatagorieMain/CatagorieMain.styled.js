import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledCatagorieMain = styled.div`
  flex:1;
  padding:10px;
  display:none;
  justify-content:center;
  .catagorie-grid{
      flex:1;
      max-width:1000px;
      justify-content:center;
      display:grid;
      gap:1px;
      grid-template-columns:repeat(6,minmax(100px,1fr));
      font-size:0.8em;
      color:${Themes.fadeBlack};
      & > a {
        width:100%;
        height:100%;
        text-decoration: none !important;
        box-sizing: border-box;
      }
      &-item{
         width: 100%;
         height: 100%;
         box-sizing: border-box;
          display:flex;
          flex-direction:column;
          justify-content:space-evenly;
          align-items:center;
          background-color:white;
          padding:5px;
        .add-cricle{
           color:${Themes.niceRed};
           width:100%;
           transform:scale(1.5);
        }
        .post-add{
          color:${Themes.niceRed};
        }
      }
  }
  @media screen and (max-width:1115px){
     &{
       display:flex;
     }
  }
  @media screen and (max-width:617px){
    .catagorie-grid{
      grid-template-columns:repeat(4,minmax(100px,1fr));
      font-size:0.7em;
    }
  }
  @media screen and (max-width:420px){
    .catagorie-grid{
      grid-template-columns:repeat(3,minmax(100px,1fr));
     
    }
  }
  @media screen and (max-width:320px){
    .catagorie-grid{
      grid-template-columns:repeat(3,1fr);
    }
  }
`