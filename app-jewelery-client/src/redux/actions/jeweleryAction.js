import {UPDATESTATE} from "../types/jeweleryType";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

export function updateState(data){
    return{
        type: UPDATESTATE,
        payload: data
    }
}


export const uploadPhoto = (file) => (dispatch) => {
    const data = new FormData();
    data.append("file", file);
    axios.post(API_PATH + "file/save", data)
        .then((res) => {
            dispatch(updateState({photo: res.data.id}));
        })
}
