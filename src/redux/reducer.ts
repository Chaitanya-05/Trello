import { BOARDS, DASH } from './actionTypes';
import { initialState, StateInterface } from './initialState';

export const reducer = (state = initialState, action: any): StateInterface => {
    switch (action.type) {
        case BOARDS:
            return {
                ...state,
                boards: action.payload,
            };
        case DASH:
            return {
                ...state,
                curBoard: action.payload,
            };
        default:
            return state;
    }
};
