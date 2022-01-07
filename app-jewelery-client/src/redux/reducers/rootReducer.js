import {authReducer} from "./authReducer";
import {combineReducers} from "redux";
import {adminUsersReducer} from "./adminUsersReducer";
import {serReduser} from "./serReducer";
import {jeweleryReducer} from "./jeweleryReducer";
import {pageDataReducer} from "./pageDataReducer";
import {logoReducer} from "./logoReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    adminUsers: adminUsersReducer,
    serData: serReduser,
    jewelery: jeweleryReducer,
    pageData: pageDataReducer,
    logo: logoReducer
})
