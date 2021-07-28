
import {UPDATESTATE} from "../types/adminUsersType";

const initialState = {
     data: {},
    forSerNumber: null,
    modalOpendOne: false,
    modalOpendTwo: false,
    modalOpendThree: false
}

export const serReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATESTATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}