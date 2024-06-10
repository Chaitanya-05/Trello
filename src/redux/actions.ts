// actions.ts
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { BOARDS, BOARD, DASH } from './actionTypes';
import { API_KEY, API_TOKEN } from '../api/trello';
import { StateInterface } from './initialState';

interface FetchBoardsAction {
    type: typeof BOARDS;
    payload: any; 
}

interface FetchBoardAction {
    type: typeof BOARD;
    payload: any; 
}

interface SetCurBoardAction {
    type: typeof DASH;
    payload: any; 
}

export type AppActions = FetchBoardsAction | FetchBoardAction | SetCurBoardAction;

export const fetchBoards:any = (): ThunkAction<void, StateInterface, unknown, Action<string>> => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.trello.com/1/members/me/boards?key=${API_KEY}&token=${API_TOKEN}`);
            console.log(response.data);
            dispatch({ type: BOARDS, payload: response.data });
        } catch (error) {
            console.error(error);
        }
    };
};

export const fetchBoard:any = (boardId: string): ThunkAction<void, StateInterface, unknown, Action<string>> => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.trello.com/1/boards/${boardId}`, {
                params: {
                    key: API_KEY,
                    token: API_TOKEN,
                },
            });
            console.log(response.data);
            dispatch({ type: BOARD, payload: response.data });
        } catch (error) {
            console.error(error);
        }
    };
};

export const setCurBoard = (boardId: string): any => {
    return { type: DASH, payload: boardId };
};
