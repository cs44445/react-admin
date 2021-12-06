import { CHANGE_THEME } from "../constant";

const initState = {
  theme: "dark"
}

export default function changeThemeReducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" }
    default:
      return state
  }
}