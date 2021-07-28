/**
 * Created by Sherlock on 25.07.2021.
 */
import React, {useState} from 'react';
import axios from "axios";
import {API_PATH, CONFIG, TOKEN_NAME} from "../tools/constants";
import {updateState} from "../redux/actions/authAction";
import {Route} from "react-router-dom";
import NotFound from "../pages/NotFound";

const PrivateRoute = (props) => {
    const [show, setShow] = useState(false);

    axios.get(API_PATH + "user/me", CONFIG)
        .then((res) => {
            const role = res.data.roles;
            if (props.role === "admin") {
                role.filter(item => item.name === "ROLE_ADMIN").length > 0 ?
                    setShow(true) : setShow(false)
            } else if (props.role === "director") {
                role.filter(item => item.name === "ROLE_DIRECTOR").length > 0 ?
                    setShow(true) : setShow(false)
            } else if (props.role === "worker") {
                role.filter(item => item.name === "ROLE_WORKER").length > 0 ?
                    setShow(true) : setShow(false)
            }
        })
        .catch(() => {
            setShow(false)
        })

    return (localStorage.getItem(TOKEN_NAME) ?
        show ? <Route {...props}/> : <Route component={NotFound}/>
        :
        <Route component={NotFound}/>)
};

export default PrivateRoute;