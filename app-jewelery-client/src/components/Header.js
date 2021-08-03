import React from 'react';
import {getText} from "../locales";

const Header = () => {
    return (
        <div className='header'>
            <h1>Gemstone Certification of Uzbekistan</h1>

            <h2>{getText("headerTitle")}</h2>

            <img src="/images/GCU.png" alt=""/>
        </div>
    );
};

export default Header;