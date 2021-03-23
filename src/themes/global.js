import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`