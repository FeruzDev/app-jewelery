import React, {useEffect, useState} from 'react';
import {API_PATH} from "../tools/constants";
import axios from "axios";
import {getText} from "../locales";

const Logos = () => {

    const [more, setMore] = useState(4)

    const [imgs, setImgs] = useState([])
    const addMore = () => {
        setMore(more + 2)
    }
    useEffect(() => {
        axios.get(API_PATH + "jewelery/logo")
            .then(res => {
                setImgs(res.data.data)
                console.log(res.data.data)
            })
    }, [])
    return (
        <div className="logos-pair">
            <h2 className="mt-5">{getText("nu6")} </h2>

            <div className="container desc">
                <div className="row">
                    {
                        imgs?.map(item => (
                            <div className="col-md-3">
                                <img src={API_PATH + "file/get/" + item.photo} alt=""/>
                            </div>

                        ))
                    }

                </div>
            </div>


            <div className="container mob">
                <div className="row">
                    {
                        imgs?.slice(0, more).map(item => (
                            <div className="col-md-3">
                                <img src={API_PATH + "file/get/" + item.photo} alt=""/>
                            </div>

                        ))
                    }
                </div>
                {
                    imgs.length > 4 ?
                        <button onClick={addMore} className="add-more">Дальше <img src="/images/icon/ar12.svg" alt=""/></button>
                        :
                        ""
                }
            </div>
        </div>
    );
};

export default Logos;