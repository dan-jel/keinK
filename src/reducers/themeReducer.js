const initialThemes = {
  selected: {
    id: 0,
    theme: {
      color_main: "#1f1f1f",
      color_nav: "#141414",
      color_text_1: "white",
      color_text_2: "white",
      color_hightlight: "blue",
    },
  },
  zero: {
    color_main: "#1f1f1f",
    color_nav: "#141414",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "blue",
  },
  one: {
    color_main: "#ADA296",
    color_nav: "#312F2F",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "#8D5A97",
  },
  two: {
    color_main: "lightgray",
    color_nav: "white",
    color_text_1: "black",
    color_text_2: "black",
    color_hightlight: "green",
  },
  three: {
    color_main: "red",
    color_nav: "blue",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "orange",
  },
  four: {
    color_main: "red",
    color_nav: "blue",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "yellow",
  },
  five: {
    color_main: "red",
    color_nav: "blue",
    color_text_1: "white",
    color_text_2: "white",
    color_hightlight: "pink",
  },
};

const themeReducer = (state = initialThemes, action) => {
  switch (action.type) {
    default:
      return state;
    case "SET_0":
      return Object.assign({}, state, {
        ...state,
        selected: { id: 0, theme: state.zero },
      });
    case "SET_1":
      return Object.assign({}, state, {
        ...state,
        selected: { id: 1, theme: state.one },
      });
    case "SET_2":
      return Object.assign({}, state, {
        ...state,
        selected: { id: 2, theme: state.two },
      });
    case "SET_3":
      return Object.assign({}, state, {
        ...state,
        selected: { id: 3, theme: state.three },
      });
    case "SET_4":
      return Object.assign({}, state, {
        ...state,
        selected: { id: 4, theme: state.four },
      });
    case "SET_5":
      return Object.assign({}, state, {
        ...state,
        selected: { id: 5, theme: state.five },
      });
  }
};

export default themeReducer;
