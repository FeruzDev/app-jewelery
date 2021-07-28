import React from 'react';
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Procedure = () => {
    return (
        <div className='procedure'>
            <div className="title">
                <div></div>

                <h2>Наши</h2>
                <div></div>
            </div>


            <div className="sub-title">

                <h1>Процедура</h1>

                <h3>Как получить сертификат?</h3>

            </div>



            <div className="pro-titles container">
                <h1><img src="/images/01.png" alt=""/><span>Обращаетесь к эксперту гемологу который оценит ваше украшение</span></h1>
                <h1><img src="/images/02.png" alt=""/><span>Сообщите ему о желании что хотите чтобы ваше изделие было зафиксировано в базе GCU</span></h1>
                <h1><img src="/images/03.png" alt=""/><span>В течении 24 часов наш специалист сообщит ваш ID на либо придет смс на номер телефона</span></h1>
            </div>


            <div className="sub-title container">


                <h3>Также есть возможность получить пластиковый сертификат где будут указаны все данные о вашем изделии</h3>

            </div>



            <Contact/>

            <Footer/>
        </div>
    );
};

export default Procedure;