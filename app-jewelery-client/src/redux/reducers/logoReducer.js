/**
 * Created by Sherlock on 07.01.2022.
 */
import {UPDATESTATE} from "../types/logoType";

const initialState = {
    isOpen: false,
    isOpenDelete: false,
    selectedId: null,
    logos: [],
    photo: null,
    selectedLogo: null,
    isLoading: false
}

export const logoReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATESTATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}