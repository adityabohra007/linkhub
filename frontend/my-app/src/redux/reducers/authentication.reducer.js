import { userActionTypes } from "../constants/user.constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userActionTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userActionTypes.LOGIN_FAILURE:
      return {};
    case userActionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
}
