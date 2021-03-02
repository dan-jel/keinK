import LeosBackground from "../img/themes/leo.jpeg";
import VincentsBackground from "../img/themes/vince.jpeg";
import ChiaraBackground from "../img/themes/chiara.jpeg";

const initialThemes = {
  zero: {
    id: 0,
    tag: "default",
    color_main: "#1f1f1f",
    color_nav: "#141414",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "blue",
  },
  one: {
    id: 1,
    bg: true,
    background: ChiaraBackground,
    tag: "chiara",
    color_main: "#ADA296",
    color_nav: "#312F2F",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "#8D5A97",
  },
  two: {
    id: 2,
    tag: "daniel",
    color_main: "lightgray",
    color_nav: "white",
    color_text_1: "black",
    color_text_2: "black",
    color_hightlight: "green",
  },
  three: {
    id: 3,
    bg: false,
    tag: "julius",
    color_main: "red",
    color_nav: "blue",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "orange",
  },
  four: {
    id: 4,
    bg: true,
    background: LeosBackground,
    tag: "leo",
    color_main: "red",
    color_nav: "blue",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "yellow",
  },
  five: {
    id: 5,
    bg: true,
    background: VincentsBackground,
    tag: "vincent",
    color_main: "red",
    color_nav: "blue",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "pink",
  },
};

const selected = initialThemes.zero;

const themeReducer = (state = selected, action) => {
  switch (action.type) {
    default:
      return state;
    case "SET_0":
      return Object.assign(initialThemes.zero);
    case "SET_1":
      return Object.assign(initialThemes.one);
    case "SET_2":
      return Object.assign(initialThemes.two);
    case "SET_3":
      return Object.assign(initialThemes.three);
    case "SET_4":
      return Object.assign(initialThemes.four);
    case "SET_5":
      return Object.assign(initialThemes.five);
  }
};

export default themeReducer;
