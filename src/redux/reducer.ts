import axios from "axios";
import { AUTH, BOARD, BOARDS, DASH } from "./actionTypes";
import { StateInterface, initialState } from "./initialState";
import { API_KEY, API_TOKEN } from "../api/trello";




interface action {
    type:string;
    payload:any;

}

export const reducer=(state=initialState,action:any):StateInterface=>{

switch (action.type) {
    case BOARDS:{
               
            // console.log(action.payload)

       return {
        ...state,
        boards:action.payload
       }
    }
    case BOARD:{
        console.log(action.payload);
        
        // axios
        // .get(`https://api.trello.com/1/boards/${"6666c14dae9bb2a86f8f008d"}`,{
        //     params:{
        //         key:API_KEY,
        //         token:API_TOKEN
        //     }
        // })
        // .then(function (response) {
        //     console.log(response.data);
        //   })
        return {
            ...state,
            curBoard:action.payload
        }
    }
    case DASH:{
        return {
            ...state,
            curBoard:action.payload
        }
    }
        

    default:
        return state;
}
}