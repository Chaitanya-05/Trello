import { AUTH } from "./actionTypes";
import { initialState } from "./initialState";

interface action {
    type:string;
    action:any;

}

export const reducer=(state=initialState,action:action)=>{
switch (action.type) {
    case AUTH:
        
        break;

    default:
        return state;
}
}