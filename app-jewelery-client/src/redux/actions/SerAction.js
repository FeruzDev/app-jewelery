import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {UPDATESTATE} from "../types/adminUsersType";
import {toast} from "react-toastify";


export function updateState(data){
    return{
        type: UPDATESTATE,
        payload: data
    }
}

export const sertification = ( data) => {


    return function (dispatch) {

        axios.get(API_PATH + "jewelery/check/" + data, {   headers: {
                "Authorization": localStorage.getItem(TOKEN_NAME)
            }})
            .then(res => {
                console.log(res)
                dispatch(updateState({data: res.data.data}))
            })
    }

}

export const getComments = (path) => (dispatch) => {
    axios.get(API_PATH + "comment/" + path)
        .then(res => {
            dispatch(updateState({comments: res.data.data}));
        })
}

export const sendComment = (e, v, form) => (dispatch, getState) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "comment/add", {...v, jewelery: getState().serData.data.id})
        .then(res => {
            dispatch(getComments(getState().serData.path))
            form.reset();
        })
        .catch(err => {

        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}