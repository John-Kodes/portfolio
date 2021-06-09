import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    body, html {
        overflow: overlay; // allows scrollbar to go over the page
        overflow-x: hidden;
    }

    html{
        font-size: 62.5%; // 1rem = 10px
    }

    // Ubuntu = 300/400/500
    // Yeseva One = 400
    // Montserrat = 300/400/600
    body{
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 400;
        background-color: ${(props) => props.theme.pageBg100};
        font-size: 1.8rem;
    }
    p, ul {
        color: ${(props) => props.theme.textColor};
        line-height: 1.5;
     }
    h1{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 4.8rem;
        color: ${(props) => props.theme.primaryColor200}
    }
    h2{
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 3.6rem;
        color: ${(props) => props.theme.black}
    }
    h3{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 2.4rem;
        color: ${(props) => props.theme.black}
    }
    h4{
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        font-size: 2rem;
        color: ${(props) => props.theme.black}
    }
    button, input[type="submit"], input[type="reset"] {
	    background: none;
	    color: inherit;
	    border: none;
	    padding: 0;
	    font: inherit;
	    cursor: pointer;
	    outline: inherit;
    }
    ::selection {
        background-color: ${(props) => props.theme.primaryColor100};
        color: black;
    }

    ::-webkit-scrollbar{
        background-color: transparent;
        width: 10px;
        &-thumb{
            background-color: ${(props) => props.theme.primaryColor100};
            border-radius: 100rem;
        }
    }
`;

export default GlobalStyles;
