import rootReducer from "./components/cart/reducers/rootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);
export default store;
