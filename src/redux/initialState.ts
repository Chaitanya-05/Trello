
export interface StateInterface {
    boards: any[];
    curBoard: any;
}

export const initialState: StateInterface = {
    boards: [],
    curBoard: null
};
