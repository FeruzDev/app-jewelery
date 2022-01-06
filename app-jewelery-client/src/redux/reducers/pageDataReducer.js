/**
 * Created by Sherlock on 06.01.2022.
 */
import {UPDATESTATE} from "../types/pageDataType";

const initialState = {
    isOpen: false,
    data: {}
}

export const pageDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATESTATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}