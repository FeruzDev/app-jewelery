

import React, {Component} from 'react';
import axios from "axios";


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



                     <h1>Еще остались вопросы и вы не нашли ответа на него?</h1>
                       <h2>Оставьте ваши контакты и мы ответим на все ваши вопросы</h2>

                            <form className="appLicationRequest" onSubmit={this.submitHandler}>
                                <input name="fio"   type="text" placeholder="Ваше имя " className="form-control  " onChange={this.changeHandler}/>
                                <input type="text" name="phone"  placeholder="Телефон" className="form-control  " onChange={this.changeHandler}/>
                                <button type="submit" disabled={this.state.dis} className="btn   btn-block">Отправить</button>
                            </form>


            </div>
        );
    }
}

export default Contact;