import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { Theme } from "../models/theme";

// //background-color: ${({ theme }) => theme.colors.backgroundSecondary};

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
${normalize}
* {
  box-sizing: border-box;
}

body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) =>
        theme.name === "light"
          ? `linear-gradient(to bottom right, #0077ff, #00ff99)`
          : theme.colors.backgroundSecondary};
   
      transition: background 0.2s;
        
      padding: 50px 0 0 0;
      font-family: "Roboto", sans-serif;
      color: black;
}

.content {
  background: ${({ theme }) =>
    theme.name === "light" ? `white` : theme.colors.backgroundContainer};
   
      transition: background 0.2s;

      width: 600px;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      text-align: center;

h1{
color: white}
`;
// display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// }
