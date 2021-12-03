import { CHANGE_THEME_TO_LIGHT, CHANGE_THEME_TO_DARK } from "../constant";

const initState = {
  theme: "dark"
}

export default function changeThemeReducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_THEME_TO_LIGHT:
      return { ...state, theme: "light" }
    case CHANGE_THEME_TO_DARK:
      return { ...state, theme: "dark" }
    default:
      return state
  }
}