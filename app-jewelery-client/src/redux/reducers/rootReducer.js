import {authReducer} from "./authReducer";
import {combineReducers} from "redux";
import {adminUsersReducer} from "./adminUsersReducer";
import {serReduser} from "./serReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    adminUsers: adminUsersReducer,
    serData: serReduser
})
