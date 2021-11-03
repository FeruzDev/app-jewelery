import React, {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {SITE_LANG} from "../tools/constants";

const Footer = () => {


    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    const  changeLang = (lang) =>{
        localStorage.setItem(SITE_LANG, (lang));
        window.location.reload();
    }
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {/*<button>*/}
                        {/*    <img src="/images/icon/eath.png" alt=""/>*/}
                        {/*    Русский*/}
                        {/*</button>*/}

                        <Dropdown className="lang-btn" isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                <img src="/images/icon/eath.png" alt=""/>
                                {localStorage.getItem("language") === "ru" ? " Русский" : " O'zbek tili" }

                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem   onClick={() => changeLang('ru')}>

                                    Русский
                                </DropdownItem>

                                <DropdownItem  onClick={() => changeLang('uz')} >

                                    O'zbek tili
                                </DropdownItem>



                            </DropdownMenu>
                        </Dropdown>

                    </div>
                    <div className="col-4">
                        <img src="/images/icon/logo2.png" alt=""/>

                    </div>
                    <div className="col-4">
                        <ul>
                            {/*<li><img src="/images/icon/Group19375.png" alt=""/></li>*/}
                            <li ><a href="https://instagram.com/gcu.uz?utm_medium=copy_link" target="_blank"><img src="/images/icon/Group19376.png" alt=""/></a></li>
                            {/*<li><img src="/images/icon/Group19377.png" alt=""/></li>*/}
                            <li><a href="https://t.me/gcu_uz" target="_blank"><img src="/images/icon/Group19378.png" alt=""/></a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="sub-footer ">
                <h6 className="container">2021 © Gemstone Certification of Uzbekistan</h6>
            </div>
        </div>
    );
};

export default Footer;