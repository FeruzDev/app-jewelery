import React from 'react';
import {getText} from "../locales";

const HomeCompany = () => {



    // const [activeIndex, setActiveIndex] = useState(0);
    //
    // const handleOnClick = index => {
    //     setActiveIndex({ index });
    // };





    return (
        <div className="home-company">
            <div className="title">
                <div />

                <h2 >{getText("HM1")}</h2>
                <div />
            </div>

                <div className="sub-title">

                    <h1>Gemstone Certification of Uzbekistan</h1>

                    <h3>{getText("HM2")}</h3>

                </div>

            <div className='container  agents-nav-tabs'>

                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item active">
                        <a className="nav-link " data-toggle="tab" href="#tabs-1" role="tab">{getText("HM3")}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">{getText("HM4")}</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">{getText("HM5")}</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                        <div  style={{backgroundColor: '#F3F9FB'}} className="d-flex main-tab-e">

                        <p> {getText("HM6")}
                        </p>
                        <img src="/images/nav1.png" alt="nav1.png"/>

                        </div>


                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                        <div  style={{backgroundColor: '#F3F9FB'}} className="d-flex main-tab-e">


                        <p> {getText("HM7")}
                        </p>
                        <img src="/images/nav2.png" alt="nav2.png"/>
                        </div>
                    </div>

                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                        <div  style={{backgroundColor: '#F3F9FB'}} className="d-flex main-tab-e">

                        <p> {getText("HM8")}
                           </p>
                           <img src="/images/nav3.png" alt="nav3.png"/>
                       </div>

                    </div>





                </div>
            </div>





        </div>
    );
};

export default HomeCompany;