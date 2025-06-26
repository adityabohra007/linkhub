import { userActionTypes } from "../constants/user.constants";
import { userService } from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { alertActions } from "./alert.actions";
export const userActions = { login, logout };
function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));
    userService.login(username, password, dispatch).then(
      (user) => {
        dispatch(success(user));
        // dispatch(roles(user));
        window.location = "/loggedin";
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
  function request(user) {
    return { type: userActionTypes.LOGIN_REQUEST, user };
  }
  function roles(user) {
    return { type: userActionTypes.GET_ROLE, user };
  }
  function success(user) {
    return { type: userActionTypes.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userActionTypes.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userActionTypes.LOGOUT };
}
