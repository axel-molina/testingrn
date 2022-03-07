import {
    START_GET_USERS,
    SUCCES_GET_USERS,
    ERROR_GET_USERS,
} from '../types';

const initialState = {
    user: null,
    error: null,
    loading: false
}

export default function(state = initialState, action:any){
    switch(action.type){
        case START_GET_USERS:
            return {
                ...state,
                loading: action.payload
            }
        case SUCCES_GET_USERS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            }
        case ERROR_GET_USERS:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        
        default:
            return state;
    }
}