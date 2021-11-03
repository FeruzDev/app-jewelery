import React from 'react';
import {getText} from "../locales";

const Header = () => {
    return (
        <div className='header '>
            <div className="container">

                <h1>Gemstone Certification of Uzbekistan</h1>

                <h2>{getText("headerTitle")}</h2>
                <img src="/images/GCU.png" alt=""/>

            </div>

        </div>
    );
};

export default Header;