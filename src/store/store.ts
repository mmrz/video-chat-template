import userReducer from "./reducer";
import { createStore, combineReducers } from 'redux';
import { StateType } from "typesafe-actions";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  users: userReducer,
});

export type RootState = StateType<typeof reducer>;
const persistedReducer = persistReducer<RootState, any>(persistConfig, reducer)

const store = createStore(persistedReducer);

export const persistor = persistStore(store)
export default store
