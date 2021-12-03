import { SAVE_MENU_TITLE } from "../constant";

export default function menuTitleReducer(state = '', action) {
  const { type, data } = action
  switch (type) {
    case SAVE_MENU_TITLE:
      return data;
    default:
      return state
  }
}