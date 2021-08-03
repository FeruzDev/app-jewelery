import React from 'react';
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {getText} from "../locales";

const Procedure = () => {
    return (
        <div className='procedure'>
            <div className="title">
                <div></div>

                <h2>{getText("HE1")}</h2>
                <div></div>
            </div>


            <div className="sub-title">

                <h1>{getText("P1")}</h1>

                <h3>{getText("P2")}</h3>

            </div>



            <div className="pro-titles container">
                <h1><img src="/images/01.png" alt=""/><span>{getText("PI1")}</span></h1>
                <h1><img src="/images/02.png" alt=""/><span>{getText("PI2")}</span></h1>
                <h1><img src="/images/03.png" alt=""/><span>{getText("PI3")}</span></h1>
            </div>


            <div className="sub-title container">


                <h3>{getText("PI4")}</h3>

            </div>



            <Contact/>

            <Footer/>
        </div>
    );
};

export default Procedure;