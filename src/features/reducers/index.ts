import { combineReducers, createStore } from "redux";
import { reloadReducer } from './reloadData';
import { valueKeyword } from "./keyword";
import { limit } from "../action/limit";
import { avatarReducer } from "./avatar";
import { emailReducer } from "./emai";
import paginationSlice from "../action/paginationSlice";
const rootReducer = combineReducers({
  reload: reloadReducer,
  valueKeyword: valueKeyword, // Thêm reducer mới cho valueKeyword
  limit: limit,
  avatar: avatarReducer,
  email: emailReducer,
  paginationSlice: paginationSlice
});

const store = createStore(rootReducer);
export default store;
