

import React, {Component} from 'react';
import axios from "axios";
import {getText} from "../locales";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fio : '',
            phone: '',
            dis: false

        }
    }

    changeHandler =e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault();



        axios.post("https://api.kelyanmedia.com/new-bid", this.state)
            .then(res =>{


                this.setState({dis   :     true })
            })
            .catch(error =>{
                console.log(error)
            })




        this.setState({
            fio : '',
            phone: '',
        });

    }


    render() {
        return (
            <div className=" contact container">



                     <h1>{getText("Q1")}</h1>
                       <h2>{getText("Q2")}</h2>

                            <form className="appLicationRequest" onSubmit={this.submitHandler}>
                                <input name="fio"   type="text" placeholder={getText("Q3")}   className="form-control  " onChange={this.changeHandler}/>
                                <input type="text" name="phone"  placeholder={getText("Q4")} className="form-control  " onChange={this.changeHandler}/>
                                <button type="submit" disabled={this.state.dis} className="btn   btn-block">{getText("Q5")}</button>
                            </form>


            </div>
        );
    }
}

export default Contact;