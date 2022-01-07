import {UPDATESTATE} from "../types/jeweleryType";
import axios from "axios";
import {API_PATH, CONFIG, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";

export function updateState(data) {
    return {
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
    if (getState().jewelery.serialSuccess){
        axios.post(API_PATH + "jewelery/saveOrUpdate", values, CONFIG)
            .then((res) => {
                toast.success("Выполнено")
                dispatch(updateState({
                    photo: null,
                    isOpen: false,
                    diamonds: [],
                    characteristics: [],
                    selectedJewelery: null
                }))
                dispatch(getJeweleries(0));
            })
            .catch(err => {
                toast.error("Ощибка")

            })
            .finally(() => {
                dispatch(updateState({isLoading: false}))
            })
    } else {
        toast.error("Jewelery with this serial exists")
        dispatch(updateState({isLoading: false}))


    }
}

export const getJeweleries = (page) => (dispatch) => {
    axios.get(API_PATH + "jewelery?size=10&page=" + page, CONFIG)
        .then(res => {
            dispatch(updateState({
                jeweleries: res.data.data?.content,
                page: page,
                totalPages: res.data.data?.totalPages
            }))
        })
}

export const deleteJewelery = () => (dispatch, getState) => {
    axios.delete(API_PATH + "jewelery/" + getState().jewelery.selectedId)
        .then(res => {
            if (res.data.success) {
                toast.success(res.data.message);
                dispatch(updateState({isOpenDelete: false, selectedId: null}))
                dispatch(getJeweleries(0));
            }
        })
}

export const checkSerial = (serial) => (dispatch) => {
    dispatch(updateState({isLoading: true}))
    axios.get(API_PATH + "jewelery/checkSerial/" + serial)
        .then(res => {
            dispatch(updateState({serialSuccess: res.data.success}))
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}