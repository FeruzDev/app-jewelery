import React, {useEffect, useState} from 'react';
import {API_PATH} from "../tools/constants";
import axios from "axios";

const Numbers = () => {



    const [data, setData] = useState({})


    useEffect(() =>{
        axios.get(API_PATH + "jewelery/data")
            .then(res =>{
                setData(res.data.data)
            })

    }, [])
    return (
        <div className="numbers-pair container">
            <h2>Gemstone Cerification of Uzbekistan в цифрах</h2>

            <div className="numbers-group">
                <div>
                    <h1>{data.jeweleries}</h1>
                    <p>Ювелирных изделия</p>
                </div>
                <div>
                    <h1>{data.shops}</h1>
                    <p>Магазинов по всему Узбекистану</p>
                </div>
                <div>
                    <h1>{data.specialists}</h1>
                    <p>Специалистов гемологов доверяют нам</p>
                </div>
            </div>
        </div>
    );
};

export default Numbers;