import { Theme, Themes } from "../models/theme";

const light: Theme = {
  name: "light",
  colors: {
    backgroundPrimary: "rgb(25, 133, 235)",
    backgroundSecondary: "rgb(7, 9, 36)",
    backgroundContainer: "white",
    tips: "white",
    text: "black",
  },
};

const dark: Theme = {
  name: "dark",
  colors: {
    backgroundPrimary: "rgb(7, 9, 36)",
    backgroundSecondary: "rgb(7, 9, 36)",
    backgroundContainer: "rgb(22, 23, 53)",
    tips: "rgb(30, 32, 51)",
    text: "rgb(129, 132, 153)",
  },
};

export const themes: Themes = {
  light,
  dark,
};
