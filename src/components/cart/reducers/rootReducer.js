import { combineReducers } from "redux";
import itemList from "./itemList";
import itemAmount from "./upDown";
const rootReducer = combineReducers({
  itemList,
  itemAmount,
});

export default rootReducer;
