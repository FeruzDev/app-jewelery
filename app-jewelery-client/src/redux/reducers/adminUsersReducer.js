
/**
 * Created by Sherlock on 25.07.2021.
 */

import {UPDATESTATE} from "../types/adminUsersType";

const initialState = {
    users: [],
    isOpen: false,
    isLoading: false
}

 export const adminUsersReducer = (state = initialState, action) => {
     switch (action.type) {
         case UPDATESTATE:
             return {...state, ...action.payload}
         default:
             return state;
     }
}