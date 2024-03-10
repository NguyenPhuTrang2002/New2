import { combineReducers, createStore } from "redux";
import { reloadReducer } from './reloadData';
import { valueKeyword } from "./keyword";
import { avatarReducer } from "./avatar";
import { emailReducer } from "./emai";
import paginationSlice from "../action/paginationSlice";
import limitReducer from "./limit";
const rootReducer = combineReducers({
  reload: reloadReducer,
  valueKeyword: valueKeyword,
  limit: limitReducer,
  avatar: avatarReducer,
  email: emailReducer,
  paginationSlice: paginationSlice
});

const store = createStore(rootReducer);
export default store;
