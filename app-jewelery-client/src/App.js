import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Experts from "./pages/Experts";
import Navbar from "./components/Navbar";
import React, {useEffect} from "react";
import Procedure from "./pages/Procedure";
import Login from "./pages/Login";
import {ToastContainer} from "react-toastify";
import Company from "./pages/Company";
import Search from "./pages/Search";
// import Admin from "./layouts/Admin";
import Ser from "./pages/Ser";
import AdminLayout from "./layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import {me} from "./redux/actions/authAction";
import {connect} from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import DirectorUsers from "./pages/DirectorUsers";
import Icons from "./views/Icons";
import Jewelery from "./pages/Jewelery";

function App(props) {
    useEffect(() => {
        props.me();
    })
    return (
        <BrowserRouter>
            {!window.location.href.includes("/admin") ?
                <Navbar/> : ""
            }

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/experts" component={Experts}/>
                <Route exact path="/procedure" component={Procedure}/>
                <Route exact path="/company" component={Company}/>
                <Route exact path="/search" component={Search}/>

                <Route exact path="/login" component={Login}/>
                {/*<Route exact path="/admin" component={Admin}/>*/}
                <Route exact path="/certificate/:id" component={Ser}/>
                <PrivateRoute exact path="/admin/users" component={AdminUsers} role="admin"/>
                <PrivateRoute exact path="/admin/workers" component={DirectorUsers} role="director"/>
                <PrivateRoute exact path="/admin/jewelery" component={Jewelery} role="director"/>

                <Route component={NotFound}/>
            </Switch>

            <ToastContainer/>
        </BrowserRouter>
    );
}

export default connect(null, {me})(App);
