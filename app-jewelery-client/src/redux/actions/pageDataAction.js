/**
 * Created by Sherlock on 06.01.2022.
 */
import {UPDATESTATE} from "../types/pageDataType";
import axios from "axios";
import {API_PATH, CONFIG, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";

export function updateState(data){
    return{
        type: UPDATESTATE,
        payload: data
    }
}

export const createPageData = (event, values) => (dispatch, getState) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "jewelery/data", values, CONFIG)
        .then((res) => {
            toast.success("Выполнено")
            dispatch(updateState({   isOpen: false}))
            dispatch(getPageData());
        })
        .catch(err => {
            toast.error("Ощибка")
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}

export const getPageData = () => (dispatch) => {
    axios.get(API_PATH + "jewelery/data", CONFIG)
        .then(res => {
            dispatch(updateState({data: res.data.data}))
        })
}


