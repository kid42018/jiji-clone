let Themes = {
      fbColor:{
        light:"rgb(59,89,152)",
        dark:""
      },
      primary:{
        light:"rgb(61,184,58)",
        dark:""
      },
      niceGrey:{
        light:"rgb(196, 252, 239)",
        dark:""
      },
      primaryDark:{
        light:"rgb(58,159,33)",
        dark:""
      },
      primaryFade:{
        light:"rgb(163,220,162)",
        dark:""
      },
      darkGrey:{
        light:"rgb(166,184,189)",
        dark:""
      },
      darkGreyFade1:{
        light:"rgba(166,184,189,0.1)",
        dark:""
      },
      darkGreyFade2:{
        light:"rgba(166,184,189,0.2)",
        dark:""
      },
      niceRed:{
        light:"rgb(235,87,87)",
        dark:""
      },
      white:{
        light:"rgb(255,255,255)",
        dark:""
      },
      fadeBlack:{
        light:"#345A40",
        dark:""
      },
      darkOrange:{
        light:"rgb(255,160,16)",
        dark:""
      },
      darkOrangeFade:{
        light:"rgba(255,160,16,0.8)",
        dark:""
      }
  }
 export const Theme = {
   light: Object.keys(Themes).reduce((theme,color)=>{
      theme[color] = Themes[color]["light"];
      return  theme
    },{}),
    dark: Object.keys(Themes).reduce((theme,color)=>{
      theme[color] = Themes[color]["dark"];
      return  theme
    },{})
  }
  Themes = Object.keys(Themes).reduce((theme,color)=>{
    theme[color] = props => props.theme[color];
    return  theme
  },{})
  export default Themes;