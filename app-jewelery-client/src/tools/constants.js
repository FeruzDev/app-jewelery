
export const API_PATH = "https://app-gcu.herokuapp.com/api/";
// export const API_PATH = "http://localhost/api/";
export const TOKEN_NAME = "app-jewelery-token";
export const CONFIG = {
    headers: {
        "Authorization": localStorage.getItem(TOKEN_NAME)
    }
}