import { createStore } from "redux";
import kasirReducer from "./reducers/kasirReducer";

const store = createStore(kasirReducer);

export default store;