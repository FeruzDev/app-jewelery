import {UPDATESTATE} from "../types/jeweleryType";

const initialState = {
    isOpen: false,
    isOpenDelete: false,
    selectedId: null,
    jeweleries: [],
    photo: null,
    diamonds: [],
    characteristics: [],
    selectedJewelery: null,
    totalElements: 0,
    totalPages: 0
}

export const jeweleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATESTATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}