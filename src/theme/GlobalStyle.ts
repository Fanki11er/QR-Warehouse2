import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box ;
    margin: 0;
    padding: 0;
}

li{
    list-style: none ;
}

h1, h2 {
    font-weight: 700 ;
}


/* h1{
    font-size:  ${theme.fontSizes.xl} ;
}

h2{
    font-size:  ${theme.fontSizes.l} ;
} */

a{
    text-decoration: none ;
    cursor: pointer;
    color: ${theme.colors.black};
    outline: none;

}

button {
    cursor: pointer;
    outline: none;
    
}
html{
    scrollbar-color: ${theme.colors.green} ${theme.colors.secondaryGray};
    height: 100%;
}

body {
    display: flex;
    font-family: ${theme.defaultFontFamily} ;
    color: ${theme.colors.white};
    background-color: ${theme.colors.backgroundGray};
    //scrollbar-color: ${theme.colors.green} ${theme.colors.secondaryGray};
    min-height: 100dvh;
}


#root{
    display: flex ;
    flex-direction: column ;
    width: 100%;
}

`;

export default GlobalStyle;
