import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
  *{
      margin:0;
      padding:0;
      box-sizing:border;
  }
  body,html,#root{
      width:100%;
      margin:auto;
      min-height:100vh !important;
      background-color:#FBEAFF;
      font-family:arial;
  }
  .hidden{
      display:none !important;
  }
`;
export default Global;