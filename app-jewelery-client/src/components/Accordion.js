import React, {useState} from 'react';
import {getText} from "../locales";

const Accordion = () => {
    const accordionData = [
        {
            id: '0',
            title: ' Что мне даст наличие сертификата?',
            content: `  Ценность ваш изделий автоматически увеличится в цене и вы сможете продать ваши украшения дороже`,
            isActive: false

        },

        {
            id: '2',
            title: 'Сколько времени требуется для получения сертификата?',
            content: ` По времени изготовления цифрового сертификата занимает от 1 до 24 часов. Бумажный сертификат изготавливается от 1 до 72 часов. `,
            isActive: false
        },

        {
            id: '4',
            title: '  Как проверить подлинность сертификата?',
            content: ` Подлинность проверяется через 12-ти значный код на сертификаты который вам выдается.`,
            isActive: false
        },

    ];



    const accordionDataUz = [
        {
            id: '0',
            title: ' Sertifikat menga nima beradi?',
            content: `  Sizning buyumlaringiz qiymati avtomatik ravishda oshadi va siz zargarlik buyumlaringizni qimmatroq narxga sotishingiz mumkin`,
            isActive: false

        },

        {
            id: '2',
            title: 'Sertifikat olish uchun qancha vaqt kerak?',
            content: ` Raqamli sertifikat ishlab chiqarish vaqti 1 soatdan 24 soatgacha. Qog'oz sertifikati 1 soatdan 72 soatgacha ishlab chiqariladi. `,
            isActive: false
        },

        {
            id: '4',
            title: '  Sertifikatning haqiqiyligini qanday tekshirish mumkin?',
            content: ` Haqiqiylik sizga berilgan 12 xonali sertifikat kodi orqali tasdiqlanadi.`,
            isActive: false
        },

    ];

    let indexPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return (
        <div className="accordionTable container">
            <h3 className="newPagesTitle mb-5">{getText("F1")}</h3>

            <form>
                {(localStorage.getItem("language") === "ru" ? accordionData : accordionDataUz).map((tab, index) => (
                    <div key={index}>
                        <h2>
                            <button
                                onClick={(e) => eventHandler(e, index)}
                                className={active === index ? 'active' : 'inactive'}
                                aria-expanded={active === index ? 'true' : 'false'}
                                aria-controls={'sect-' + indexCount(index)}
                                aria-disabled={active === index ? 'true' : 'false'}
                                tabIndex={indexCount(index)}
                            >


                                <span className="title-wrapper ml-3"><p className="text-left pr-4">{tab.title}</p>
                                    <span className={active === index ? 'plus' : 'minus'}></span>
                                </span>
                            </button>
                        </h2>
                        <div id={'sect-' + indexCount(index)}
                             className={active === index ? 'panel-open' : 'panel-close'}>
                            <div className="privateContent">
                                {tab.content}
                            </div>
                            <img className="ml-3" src="/imgages/icon/minus.png" alt=""/>


                        </div>
                    </div>
                ))
                }
            </form>
        </div>
    );
}

export default Accordion;