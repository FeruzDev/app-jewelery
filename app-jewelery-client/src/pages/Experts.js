import React from 'react';
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Experts = () => {
    return (
        <div className="experts ">
            <div className="title">
                <div></div>

                <h2>Наши</h2>
                <div></div>
            </div>


            <div className="sub-title">

                <h1>Эксперты</h1>

                <h3>У нас короче работют хорошие эксперты</h3>

            </div>


            <div className=" experts-con container">
                <div className="row">
                    <div className="col-3">

                        <img src="/images/jas.png" alt=""/>
                    </div>
                    <div className="col-9">
                        <h4><img src="/images/user12.png" alt=""/>Джасур Нарзуллаев</h4>
                        <p><img src="/images/cer1.png" alt=""/><span>
                            Амир Темур управлял государством в течение тридцати пяти
                            лет. За эти годы он предпринял немало военных походов, одержал победы в крупнейших
                            сражениях, покорил множество стран
                        </span></p>
                    </div>
                </div>
            </div>


            <div className="certificates container">
                <div>
                    <img src="/images/c1.png" alt=""/>
                </div>

                <div>
                    <img src="/images/c2.png" alt=""/>
                </div>
                <div>
                    <img src="/images/c3.png" alt=""/>
                </div>


            </div>



            <div className=" experts-con container">
                <div className="row">
                    <div className="col-3">

                        <img src="/images/jas.png" alt=""/>
                    </div>
                    <div className="col-9">
                        <h4><img src="/images/user12.png" alt=""/>Джасур Нарзуллаев</h4>
                        <p><img src="/images/cer1.png" alt=""/><span>
                            Амир Темур управлял государством в течение тридцати пяти
                            лет. За эти годы он предпринял немало военных походов, одержал победы в крупнейших
                            сражениях, покорил множество стран
                        </span></p>
                    </div>
                </div>
            </div>


            <div className="certificates container">
                <div>
                    <img src="/images/c1.png" alt=""/>
                </div>

                <div>
                    <img src="/images/c2.png" alt=""/>
                </div>
                <div>
                    <img src="/images/c3.png" alt=""/>
                </div>


            </div>



            <Contact/>
            <Footer/>
        </div>
    );
};

export default Experts;