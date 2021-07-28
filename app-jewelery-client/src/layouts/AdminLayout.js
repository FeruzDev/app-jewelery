import React from "react";
import {useLocation} from "react-router-dom";

import "../assets/css/animate.min.css";
import "../assets/scss/light-bootstrap-dashboard-react.scss";
import "../assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";


import routes from "../routes.js";

import sidebarImage from "../assets/img/sidebar-3.jpg";

function AdminLayout(props) {
    const [image, setImage] = React.useState(sidebarImage);
    const [color, setColor] = React.useState("black");
    const [hasImage, setHasImage] = React.useState(true);
    const location = useLocation();
    const mainPanel = React.useRef(null);

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
        if (
            window.innerWidth < 993 &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
            var element = document.getElementById("bodyClick");
            element.parentNode.removeChild(element);
        }
    }, [location]);
    return (
        <>
            <div className="wrapper">
                <Sidebar color={color} image={hasImage ? image : ""} routes={routes}/>
                <div className="main-panel" ref={mainPanel}>
                    <AdminNavbar/>
                    <div className="content">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
