import RootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";

const middleware = applyMiddleware(thunk, promise);

export default createStore(RootReducer, middleware);
