import React from 'react';
import {getText} from "../locales";

const HomeExperts = () => {
    return (
        <div className=" experts-home">

            <div className="title" style={{marginTop: "60px"}}>
                <div></div>

                <h2>{getText('HE1')}</h2>
                <div></div>
            </div>


            <div className="sub-title">

                <h1>{getText('HE2')}</h1>
                <h3 className='home-sub'  >{getText('HE3')}</h3>
            </div>


            <div className="container">


            <div className="row">
                <div className="col-6">
                    <img className="expert1" src="/images/expert1.png" alt=""/>
                    <div>
                        <h1>

                            <img src="/images/user2.png" alt=""/>

                            <span> Narzullaev Jasur</span>
                        </h1>

                        <h1>

                            <img src="/images/deta2.png" alt=""/>
                            <span> Designer</span>
                        </h1>

                    </div>
                </div>



                <div className="col-6">
                    <img className="expert1" src="/images/expert2.png" alt=""/>
                    <div>
                        <h1>

                            <img src="/images/user2.png" alt=""/>
                            <span>   Narzullaev Jasur</span>
                        </h1>

                        <h1>

                            <img src="/images/deta2.png" alt=""/>
                            <span> Designer</span>
                        </h1>

                    </div>
                </div>
            </div>


            </div>

            <div className="title" style={{marginTop: "80px"}}>
                <div></div>

                <h2>F.A.Q</h2>
                <div></div>
            </div>

        </div>
    );
};

export default HomeExperts;