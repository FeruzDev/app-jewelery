

import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu, DropdownItem
} from 'reactstrap';
import {Link} from "react-router-dom";
import {getText} from "../locales";
import {SITE_LANG} from "../tools/constants";

const MainNavbar = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);



    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    const  changeLang = (lang) =>{
        localStorage.setItem(SITE_LANG, (lang));
        window.location.reload();
    }

    return (
        <div className='main-navbar container'>
            <Navbar   expand="md" className="bg-transparent">
                <NavbarBrand href="/" ><Link to='/'><img src="/images/logo.png" alt=""/></Link></NavbarBrand>
                <NavItem className="d-md-none contact-tel">
                    <a href="tel: +998333393334" target="_blank"> <img src="/images/phone.png" alt="" /><span>{getText("n6")}</span></a>
                </NavItem>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">{getText("n1")}</Link>
                        </NavItem>
                        {/*<NavItem>*/}
                        {/*    <Link to="/experts">{getText("n2")}</Link>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem>*/}
                        {/*    <Link to="/procedure"> {getText("n3")}</Link>*/}
                        {/*</NavItem>*/}
                        <NavItem>
                            <Link to="/search">{getText("n4")} </Link>
                        </NavItem>
                        {/*<NavItem>*/}
                        {/*    <Link to="/company">{getText("n5")}</Link>*/}
                        {/*</NavItem>*/}
                        <Dropdown className="lang-btn" isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                <img src="/images/icon/eath.png" alt=""/>
                                {localStorage.getItem("language") === "uz" ? "   O'zbek tili " : "Русский " }

                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem   onClick={() => changeLang('ru')}>

                                    Русский
                                </DropdownItem>

                                <DropdownItem  onClick={() => changeLang('uz')} >

                                    O'zbek tili
                                </DropdownItem>
                                <DropdownItem  onClick={() => changeLang('en')} >

                                   English
                                </DropdownItem>



                            </DropdownMenu>
                        </Dropdown>


                        <NavItem className="contact-twel2">
                            <a href="tel: +998333393334" target="_blank"> <img src="/images/phone.png" alt="" />{getText("n6")}</a>
                        </NavItem>


                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavbar;