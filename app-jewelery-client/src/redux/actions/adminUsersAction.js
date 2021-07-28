/**
 * Created by Sherlock on 25.07.2021.
 */
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

export const getUsers = (type) => (dispatch) => {
    axios.get(API_PATH + "user/getUsers/" + type, {
        headers: {
            "Authorization": localStorage.getItem(TOKEN_NAME)
        }
    })
        .then((res) => {
            dispatch(updateState({users: res.data.data}))
        })
}

export const saveUser = (event, values) => (dispatch, getState) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "user/create" + values.role, values, {
        headers: {
            "Authorization": localStorage.getItem(TOKEN_NAME)
        }
    })
        .then((res) => {
            getState().auth.user.roles.filter(item => item.name === "ROLE_ADMIN").length > 0 ?
                dispatch(getUsers("all")) : dispatch(getUsers("worker"))
            toast.success(res.data.message);

            dispatch(updateState({isOpen: false}))
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}