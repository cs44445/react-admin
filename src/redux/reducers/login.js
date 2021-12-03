import { SAVE_USER, DELETE_USER } from '../constant'
import storage from '../../localStorage'

let user = storage.get('user')
let token = storage.get('token')
const initState = {
  user: user || {},
  token: token || ''
}

export default function loginReducer({ state = initState, action }) {
  const { type, data } = action
  switch (type) {
    case SAVE_USER:
      storage.set('token', data.token);
      storage.set('user', data.user);
      return {
        user: data.user,
        token: data.token
      };
    case DELETE_USER:
      storage.remove('user');
      storage.remove('token');
      return {
        user: {},
        token: ''
      }
    default:
      return state
  }
}