import { combineReducers } from "redux";

// import { authentication } from "./authentication.reducer";
import authReducer from "./../features/auth/authSlice";

import { alert } from "./alert.reducers";
import { link } from "./link.reducers";

const reducers = combineReducers({});
export default reducers;
