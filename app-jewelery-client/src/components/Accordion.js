import React, {useState} from 'react';

const Accordion = () => {
    const accordionData = [
        {
            id: '0',
            title: ' Что мне даст наличие сертификата?',
            content: `  Ценность ваш изделий автоматически увеличится в цене и вы сможете продать ваши украшения дороже`,
            isActive: false

        },
        {
            id: '1',
            title: ' Как мне получить сертификат?',
            content: `    Для получения сертификата нужно обратиться к одному из проверенных оценщиков которые и выдадут вам сертификат  `,
            isActive: false
        },
        {
            id: '2',
            title: 'Сколько времени требуется для получения сертификата?',
            content: ` По времени изготовления цифрового сертификата занимает от 1 до 24 часов. Бумажный сертификат изготавливается от 1 до 72 часов. `,
            isActive: false
        },
        {
            id: '3',
            title: 'Сколько стоит сделать сертификат?',
            content: `Цена получение одного электронного сертификата составляет 10.000 сум. Бумажного 100.000 сум `,
            isActive: false
        },
        {
            id: '4',
            title: '  Как проверить подлинность сертификата?',
            content: ` Подлинность проверяется через 12-ти значный код на сертификаты который вам выдается.`,
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
            <h3 className="newPagesTitle">Часто задаваемы вопросы</h3>
            <p className="acTitle">Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Elementum amet  <br/>laoreet ac
                sed gravida enim. Nibh donec quis malesuada venenatis risus. </p>
            <form>
                {accordionData.map((tab, index) => (
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