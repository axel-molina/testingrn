import {
    START_GET_USERS,
    SUCCES_GET_USERS,
    ERROR_GET_USERS,
} from '../types';

export function getUserAction(user:Array<any>){
    return (dispatch:any)=>{
        
        dispatch(addUser());
        //console.log("DESDE REDUX: ",user)
        try {
            dispatch(addUserSuccess(user));
        } catch (error) {
            dispatch(addUserError(true));
        }
    }
}

const addUser = () => ({
    type: START_GET_USERS,
    payload: true,
});


const addUserSuccess = (user:Array<any>) => ({
    type: SUCCES_GET_USERS,
    payload: user
});



const addUserError = (error:any) => ({
    type: ERROR_GET_USERS,
    payload: error
});

