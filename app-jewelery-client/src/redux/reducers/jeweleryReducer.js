import {UPDATESTATE} from "../types/jeweleryType";

const initialState = {
    isOpen: false,
    jeweleries: [],
    photo: null,
    diamonds: [],
    characteristics: []
}

export const jeweleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATESTATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}