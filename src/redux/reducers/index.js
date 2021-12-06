import menuTitleReducer from "./menuTitle";
import themeReducer from './theme'
import { combineReducers } from "redux";
const reducer = combineReducers({
  themeInfo: themeReducer
})

export default reducer