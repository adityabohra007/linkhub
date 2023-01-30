import { alertActionTypes } from "../constants/alert.constants";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertActionTypes.SUCCESS:
      return { type: "alert-success", message: action.message };
    case alertActionTypes.ERROR:
      return { type: "alert-error", message: action.message };
    case alertActionTypes.CLEAR:
      return {};
    default:
      return state;
  }
}
