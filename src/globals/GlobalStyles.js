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
        @media only screen and (max-width: 31.25em) {
            font-size: 50%; 
        }
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
    a {
        color: inherit;
        text-decoration: inherit;

    }
    p, ul {
        color: ${(props) => props.theme.textColor};
        line-height: 1.5;
     }
    h1{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 4.8rem;
        color: ${(props) => props.theme.primaryColor200};

        @media only screen and (max-width: 23em) {
            font-size: 4.2rem;
        }
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
        font-family: 'Ubuntu', sans-serif;

        /* &:focus {
	    outline: ${(p) => p.theme.black} solid;   
        } */
    }

    label {
        font-size: 1.6rem;
        color: ${(p) => p.theme.black};
    }

    input, textarea {
        background: none;
        border: none;
        border-bottom: 2px solid #e0e0e0; 
        outline: inherit;
        resize: none;
        
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.4rem;
        padding-bottom: .5rem;

        transition: all 0.2s;

        &:focus {
            border-bottom: 2px solid ${(p) => p.theme.primaryColor100}; 
            &:invalid {
            border-bottom: 2px solid #ff0080; 
            }
        }

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
