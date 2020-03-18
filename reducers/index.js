import { combineReducers } from "redux";
import reducers from "./reducers";

const allReducers = combineReducers({
  currentImageID: reducers
});

export default allReducers;