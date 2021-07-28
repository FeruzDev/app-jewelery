import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <button>
                            <img src="/images/icon/eath.png" alt=""/>
                            Русский
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="/images/icon/logo2.png" alt=""/>

                    </div>
                    <div className="col-4">
                        <ul>
                            <li><img src="/images/icon/Group19375.png" alt=""/></li>
                            <li><img src="/images/icon/Group19376.png" alt=""/></li>
                            <li><img src="/images/icon/Group19377.png" alt=""/></li>
                            <li><img src="/images/icon/Group19378.png" alt=""/></li>
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