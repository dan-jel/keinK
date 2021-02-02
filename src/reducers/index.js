import { combineReducers } from "redux";
import filterReducer from "./filterReducer";

const allReducers = combineReducers({
  filter: filterReducer,
});

export default allReducers;
