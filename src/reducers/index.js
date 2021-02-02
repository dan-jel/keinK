import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import themeReducer from "./themeReducer";

const allReducers = combineReducers({
  filter: filterReducer,
  theme: themeReducer,
});

export default allReducers;
