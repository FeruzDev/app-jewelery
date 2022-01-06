/**
 * Created by Sherlock on 07.01.2022.
 */
import {UPDATESTATE} from "../types/logoType";
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




export const createLogo = (event, values) => (dispatch, getState) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "jewelery/logo", values, CONFIG)
        .then((res) => {
            toast.success("Выполнено")
            dispatch(updateState({    photo: null, isOpen: false,  selectedLogo: null}))
            dispatch(getLogos());
        })
        .catch(err => {
            toast.error("Ощибка")

        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}

export const getLogos = () => (dispatch) => {
    axios.get(API_PATH + "jewelery/logo", CONFIG)
        .then(res => {
            dispatch(updateState({logos: res.data.data}))
        })
}


export const deleteLogo = () => (dispatch, getState) => {
    axios.delete(API_PATH + "jewelery/logo/" + getState().logo.selectedId)
        .then(res => {
            if(res.data.success){
                toast.success(res.data.message);
                dispatch(updateState({isOpenDelete: false, selectedId: null}))
                dispatch(getLogos());
            }
        })
}