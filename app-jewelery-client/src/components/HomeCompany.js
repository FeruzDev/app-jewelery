import React from 'react';
import Accordion from "./Accordion";
import Contact from "./Contact";
import Footer from "./Footer";

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

                <h2>О компании</h2>
                <div />
            </div>

                <div className="sub-title">

                    <h1>Gemstone Certification of Uzbekistan</h1>

                    <h3>Проверьте подлинность ваших сертификатов</h3>

                </div>

            <div className='container  agents-nav-tabs'>

                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item active">
                        <a className="nav-link " data-toggle="tab" href="#tabs-1" role="tab">Что это такое?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Как это работает?</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Что вы получите?</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                        <div  style={{backgroundColor: '#F3F9FB'}} className="d-flex main-tab-e">

                        <p>GIA - это система в которой специалисты
                            оценщики добавляют в базу ваши данные
                            камней. Это
                            документ подтверждающий
                            ценность ваших драгоценных камней
                            {/*<img src="/images/chtoTeskt.png" alt=""/>*/}
                        </p>
                        <img src="/images/nav1.png" alt="nav1.png"/>

                        </div>


                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                        <div  style={{backgroundColor: '#F3F9FB'}} className="d-flex main-tab-e">


                        <p>Чтобы сделать сертификат для Ваших  ювелирных изделий, от вас требуется, наличие
                            ювелирного
                            изделия, которое имеет  драгоценные или полудрагоценные камни.
                             Дальше вам нужно обратиться к
                            одному из  наших специалистов геомологов, которые есть
                            у нас на сайте. После, того как Ваше
                            изделие
                            оценят, в течение 24 часов оно попадет в базу
                            GCU и вы сможете проверить его введя
                            уникальный 12 значный код.


                            {/*<img src="/images/chtoTeskt.png" alt=""/>*/}

                        </p>
                        <img src="/images/nav2.png" alt="nav2.png"/>
                        </div>
                    </div>

                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                        <div  style={{backgroundColor: '#F3F9FB'}} className="d-flex main-tab-e">

                        <p>Сертификат на бриллиант — важный документ,
                               подтверждающий соответствие вашего
                               конкретного
                               камня стандартам, используемым
                               нашей лабораторией при его геммологической  оценке.
                               {/*<img src="/images/chtoTeskt.png" alt=""/>*/}
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