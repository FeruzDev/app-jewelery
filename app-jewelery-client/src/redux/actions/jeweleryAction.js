import {UPDATESTATE} from "../types/jeweleryType";
import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";

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



    // dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "jewelery/saveOrUpdate", values, {
        headers: {
            "Authorization": localStorage.getItem(TOKEN_NAME)
        }
    })
        .then((res) => {
            console.log("successfully added")
            console.log(res)
        })
        .finally(() => {
            console.log("finished")
        })
}


