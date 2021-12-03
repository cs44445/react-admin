import menuTitleReducer from "./menuTitle";
import loginReducer from "./login";
import { combineReducers } from "redux";
export default combineReducers({
  menuTitleReducer,
  loginReducer
})