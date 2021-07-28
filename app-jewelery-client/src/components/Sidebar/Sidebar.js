import React from "react";
import {NavLink, useLocation} from "react-router-dom";

import {Nav} from "react-bootstrap";

// import logo from "/assets/img/reactlogo.png";


function Sidebar({color, image, routes}) {
    const location = useLocation();
    const activeRoute = (routeName) => {
        return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
    return (
        <div className="sidebar" data-image={image} data-color={color}>
            <div
                className="sidebar-background"
                style={{
                    backgroundImage: "url(" + image + ")",
                }}
            />
            <div className="sidebar-wrapper">

                <Nav>
                    {routes.map((prop, key) => {

                            return (
                                <li
                                    className={
                                        prop.upgrade
                                            ? "active active-pro"
                                            : activeRoute(prop.path)
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={prop.path}
                                        className="nav-link"
                                        activeClassName="active"
                                    >
                                        <i className={prop.icon}/>
                                        <p>{prop.name}</p>
                                    </NavLink>
                                </li>
                            );

                    })}
                </Nav>
            </div>
        </div>
    );
}

export default Sidebar;
