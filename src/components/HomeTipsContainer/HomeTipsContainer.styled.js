import styled from "styled-components";
import Themes from "../../style/Theme";
export const StyledHomeTipsContainer = styled.div`
    width:100%;
    padding:10px;
    max-width:1010px;
    display:flex;
    box-sizing:border-box;
    @keyframes moveRight{
        from{
         margin-left:-100%;
        }to{
          margin-left:0%;
        }
    }
    @keyframes moveLeft{
        from{
          margin-left:0%;
        }to{
          margin-left:-100%;
        }
    }
    & > *,& > a > div {
        text-decoration: none !important;
       height:200px;
       box-sizing:border-box !important;
    }
    .img-container{
        width:100%;
        display:flex;
        height:100%;
        align-items:center;
        img{
            width:100%;
        }
        &.move-right{
            img:first-child{
              animation:moveRight 1s forwards;
            }
        }
        &.move-left{
            img:first-child{
              animation:moveLeft 1s forwards;
            }
        }
    }
    .tips-carsole{
        overflow:hidden;
        margin-right:10px;
        flex:1;
        position:relative;
        & > *{
            position:absolute;
        }
        .carsole-pagination-cont{
          display:flex;
          justify-content:center;
          left:0;
          right:0;
          bottom:0;
          margin-bottom:10px;
          span{
            transition:background-color 0.5s;
              margin:5px;
              width:12px;
              height:12px;
              border-radius:100%;
              background-color:lightgrey;
              &.active{
                  background-color:#303030;
              }    
          }
        }
        .carsole-btn{
            z-index:4;
            display:flex;
            align-items:center;
            padding:5px;
            color:white;
            background-color:rgba(0,0,0,0.3);
            cursor:pointer;
            top:30%;
            height:70px;
            svg{
                width:50px;
            }
            &--right{
                right:0;
            }
        }
    }
    .post-btn{
        cursor:pointer;
        margin-left:10px;
        background-color:${Themes.darkOrange};
        width:225px;
        display:flex;
        flex-direction:column;
        color:white;
        padding:10px;
        justify-content:space-between;
        align-items:center;
        h1{
            font-size:1.1em;
            text-align:center;
        }
        svg{
            transform:scale(6);
        }
        p{
            font-size:0.9;
        }
    }
    @media screen and (max-width:1115px){
        &{
            display:none;
        }
      }
`
