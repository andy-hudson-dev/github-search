import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 100%;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props) => props.theme.bodyBg};
        color: ${(props) => props.theme.bodyText};
    }

    header {
        margin-left: auto;
        margin-right: auto;
        padding: 1rem 3rem;
        background-color: ${(props) => props.theme.headerBg};
        color: ${(props) => props.theme.headerText};
    }

    main {
        margin-left: auto;
        margin-right: auto;
        padding: 1rem 3rem;
    }

    button {
        border: none;
        background-color: ${(props) => props.theme.primaryBg};
        color: ${(props) => props.theme.primaryText};
        cursor: pointer;
        padding: 9px 15px;
        border-radius: 4px;
        margin-left: 1rem;
    }

    input[type="text"] {
        border: .1rem solid ${(props) => props.theme.inputBorder};
        padding: 7px 14px;
        margin-left: 1rem;
    }
`;

export default GlobalStyle;