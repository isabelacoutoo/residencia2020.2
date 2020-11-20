import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
   }
   html, body, #root {
     height: 100vh;
     width: 100%;
     overflow: hidden;

     background: #5D79B1;
     @media (max-width: 500px) {
     overflow: visible;
     height: 100%;

    }
   }
   body {
    background: #F0F2F5;
    -webkit-font-smoothing: antialiased;
  }
  #root {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body, input, button, a  {
    font-family: Verdana, Geneva, Tahoma,sans-serif;
    font-size: 15px;
  }
  button, input {
    width: 100%;
  }
  input {
    border-radius: 3px;
    border: 2px;
  }
  td {
    /* display:block; */
    min-width: 100px;
    max-width: 270px;
    white-space: normal;
    div {
    hyphens: auto;
    }

  }
  input {
    border-radius: 3px;
    border: 2px;
  }
  
  `;
