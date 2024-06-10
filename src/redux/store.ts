import { legacy_createStore } from "redux";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

export const store = legacy_createStore(reducer,initialState)