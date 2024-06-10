import { legacy_createStore } from "redux";
import { StateInterface, initialState } from "./initialState";
import { reducer } from "./reducer";

export const store = legacy_createStore(reducer,initialState)