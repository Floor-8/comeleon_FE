import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`  
${reset}

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

    ::selection {
    background-color: #5E81F4;
  }
s
    a{
      text-decoration:none;
    }

    button{
      cursor: pointer;
    }
    
  }
  a{
    text-decoration: none;
    color:black;
  }


`;

export default GlobalStyle;
