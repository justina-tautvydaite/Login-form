import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    font-family: 'Poppins', sans-serif;
  }
  
h1 {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 15px;
}
p {
  margin-bottom: 10px;
}
body, html, #root {
  height: 100%;
}
`;

export default GlobalStyle;
