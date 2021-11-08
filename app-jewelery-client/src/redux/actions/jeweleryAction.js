import {UPDATESTATE} from "../types/jeweleryType";
import axios from "axios";
import {API_PATH, CONFIG, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";

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




export const createJewelery = (event, values) => (dispatch, getState) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "jewelery/saveOrUpdate", values, CONFIG)
        .then((res) => {
            toast.success("Выполнено")
            dispatch(updateState({    photo: null, isOpen: false, diamonds: [], characteristics: []}))
            dispatch(getJeweleries(0));
        })
        .catch(err => {
            toast.error("Ощибка")

        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}

export const getJeweleries = (page) => (dispatch) => {
    axios.get(API_PATH + "jewelery?page=" + page, CONFIG)
        .then(res => {
            dispatch(updateState({jeweleries: res.data.data?.content}))
        })
}


