import { createStore, combineReducers } from "redux";
import rootReducer from "./reducer/rootReducer";

const store = createStore(combineReducers(rootReducer));

export default store;
