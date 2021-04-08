import { createStore } from "redux";
import orderItemReducer from "./reducer/orderItemReducer";

const store = createStore(orderItemReducer);

export default store;
