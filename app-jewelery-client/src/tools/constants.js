
// export const API_PATH = "https://app-gcu.herokuapp.com/api/";
// export const API_PATH = "http://localhost/api/";
// export const API_PATH = "http://localhost:81/api/";

// export const API_PATH = "http://185.196.214.134/api/";
export const API_PATH = "http://192.168.0.102/api/";

export const TOKEN_NAME = "app-jewelery-token";
export const SITE_LANG = "language"
export const CONFIG = {
    headers: {
        "Authorization": localStorage.getItem(TOKEN_NAME)
    }
}