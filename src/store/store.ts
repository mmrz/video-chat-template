import userReducer from "./reducer";
import { createStore, combineReducers } from 'redux';
import { StateType } from "typesafe-actions";

const reducer = combineReducers({
  users: userReducer,
});

const store = createStore(reducer);

export type RootState = StateType<typeof reducer>;
export default store
