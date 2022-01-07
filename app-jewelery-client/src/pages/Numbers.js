import React, {useEffect, useState} from 'react';
import {API_PATH} from "../tools/constants";
import axios from "axios";
import CountUp from 'react-countup';
import {getText} from "../locales";

const Numbers = () => {


    const [loading, setLoading] = React.useState(false);

    const [data, setData] = useState({})
    const onStart = () => {
        setLoading(true);
    };

    const onEnd = () => {
        setLoading(false);
    };

    const containerProps = {
        'aria-busy': loading,
    };


    useEffect(() =>{
        axios.get(API_PATH + "jewelery/data")
            .then(res =>{
                setData(res.data.data)
            })

    }, [])
    return (
        <div className="numbers-pair container">
            <h2>{getText("nu1")}</h2>

            <div className="numbers-group">
                <div>
                    <h1><CountUp end={data?.jeweleries} duration="3"   onStart={onStart} /></h1>
                    <p>{getText("nu2")}</p>
                </div>
                <div>
                    <h1><CountUp end={data?.shops}  duration="3"   onStart={onStart}/></h1>
                    <p>{getText("nu3")}</p>
                </div>
                <div>
                    <h1><CountUp end={data?.specialists} duration="3"   onStart={onStart} /></h1>
                    <p>{getText("nu3")}</p>
                </div>
            </div>
        </div>
    );
};

export default Numbers;