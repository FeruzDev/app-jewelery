import axios from "axios";
import {API_PATH, CONFIG, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";
import {UPDATESTATE} from "../types/authType";

export function updateState(data){
    return{
        type: UPDATESTATE,
        payload: data
    }
}
const localStorageAsync = {
    set: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    get: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }
};

export const login = (event, data) => (dispatch) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "auth/login", data)
        .then(async (res) => {
            localStorageAsync
                .set(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken)
                .then(function() {
                    setTimeout(() => {
                        event.push("/admin/users");
                    }, 2000)
                })
        })
        .catch((res) => {
            toast.error(res.response.data.message);
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}

export const me = () => (dispatch) => {
    axios.get(API_PATH + "user/me", CONFIG)
        .then((res) => {
            dispatch(updateState({user: res.data}))
        })
}
