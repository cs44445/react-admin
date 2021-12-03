import { SAVE_USER, DELETE_USER } from "../constant";

export const saveUser = data => ({
  type: SAVE_USER,
  data
})

export const deleteUser = data => ({
  type: DELETE_USER,
  data
})

//异步action 调用登录接口进行登录时：