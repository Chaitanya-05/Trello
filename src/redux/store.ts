// store.ts
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { reducer } from './reducer';
import { StateInterface } from './initialState';
import { AppActions } from './actions';

const rootReducer = combineReducers({
    app: reducer,
});

export const store = legacy_createStore(
    rootReducer,
);

export type AppState = ReturnType<typeof rootReducer>;
