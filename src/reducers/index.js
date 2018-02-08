import { combineReducers } from "redux";
import cryptorReducer from "./cryptorReducer";

export default combineReducers({
  cryptor: cryptorReducer
});
