// import React from 'react';
// import {Collapse, Nav, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
// import {NavLink} from "react-router-dom";
//
// const Navbar = () => {
//     return (
//         <div className='navbar'>
//                 <Navbar color="faded" light expand="md">
//                     <NavbarBrand href="/">UI</NavbarBrand>
//                     <NavbarToggler />
//                     <Collapse navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="/">Cертификация</NavLink>
//                                 <NavLink href="/">Эксперты</NavLink>
//                                 <NavLink href="/">Процедура</NavLink>
//                                 <NavLink href="/">Поиск через ID</NavLink>
//                                 <NavLink href="/">О компании</NavLink>
//                             </NavItem>
//
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//         </div>
//     );
// };
//
// export default Navbar;


import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {Link} from "react-router-dom";

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
                            <Link to="/">Cертификация</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/experts">Эксперты</Link>
                        </NavItem>



                        <NavItem>
                            <Link to="/procedure">Процедура</Link>
                        </NavItem>



                        <NavItem>
                            <Link to="/search">Поиск через ID</Link>
                        </NavItem>



                        <NavItem>
                            <Link to="/company">О компании</Link>
                        </NavItem>



                        <NavItem>
                            <Link to="/"> <img src="/images/phone.png" alt="" />О компании</Link>
                        </NavItem>


                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavbar;