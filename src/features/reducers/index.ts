import { combineReducers, createStore } from "redux";
import { reloadReducer } from './reloadData'

const rootReducer = combineReducers({
  reload: reloadReducer,
})

const store = createStore(rootReducer)
export default store;