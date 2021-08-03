

import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {Link} from "react-router-dom";
import {getText} from "../locales";

const MainNavbar = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className='main-navbar container'>
            <Navbar   expand="md" className="bg-transparent">
                <NavbarBrand href="/" style={{marginRight: "125px"}}><Link to='/'><img src="/images/logo.png" alt=""/></Link></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">{getText("n1")}</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/experts">{getText("n2")}</Link>
                        </NavItem>



                        <NavItem>
                            <Link to="/procedure"> {getText("n3")}</Link>
                        </NavItem>



                        <NavItem>
                            <Link to="/search">{getText("n4")} </Link>
                        </NavItem>



                        <NavItem>
                            <Link to="/company">{getText("n5")}</Link>
                        </NavItem>



                        <NavItem>
                            <Link to="/"> <img src="/images/phone.png" alt="" />{getText("n6")}</Link>
                        </NavItem>


                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavbar;