import { combineReducers } from "redux";
import { PosReducer } from "./PosReducer";

export const reducer = combineReducers({
  POS: PosReducer
});
