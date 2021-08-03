import React from 'react';
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {getText} from "../locales";

const Company = () => {
    return (
        <div className='company'>
            <img src="/images/ban2.png" className="ban2" alt=""/>


            <div className="title">
                <div></div>

                <h2>{getText("C1")}</h2>
                <div></div>
            </div>


            <div className="sub-title">

                <h1>Gemstone Certification of Uzbekistan</h1>

                <h3>{getText("C2")}</h3>

            </div>


            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="/images/recv1.png" alt=""/>
                    </div>
                    <div className="col-6">

                        <h3>{getText("C3")}</h3>
                        <p>{getText("C4")}</p>
                    </div>


                    <div className="col-6">

                        <h3>{getText("C5")}</h3>
                        <p> {getText("C6")}</p>
                    </div>

                    <div className="col-6">
                        <img src="/images/recv2.png" alt=""/>
                    </div>


                    <div className="col-6">
                        <img src="/images/recv3.png" alt=""/>

                    </div>
                    <div className="col-6">

                        <h3>{getText("C7")}</h3>
                        <p>{getText("C8")}</p>
                    </div>


                </div>
            </div>



            <Contact/>
            <Footer/>
        </div>
    );
};

export default Company;