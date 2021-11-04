import React, {useEffect} from 'react';
import { sertification, updateState} from "../redux/actions/SerAction";
import {connect} from "react-redux";
import {AvForm, AvField } from 'availity-reactstrap-validation';
import {getText} from "../locales";

const Check = (props) => {


    const sendSer = (event , value) =>{


    }
    return (
        <div className='check d-flex'>
           <div className="left">
               <h1 className="pr-3">{getText("checkTitle")}</h1>
               <img src="/images/CHECK.png" alt="CHECK.png"/>
           </div>
            <div className="right">


                <div className="input">

                <AvForm onValidSubmit={(e, v) => props.history.push("/certificate/" + v.ForSer)}>
                    <AvField
                        required
                        name="ForSer"

                        type="text"
                        placeholder='Ваше ID'
                    />
                    <button > {getText("checkButton")}</button>

                </AvForm>
                    <img src="/images/icon/loupe.png" alt=""/>

                </div>


                {/*<div className="input">*/}
                {/*    <input type="text" placeholder='Ваше ID'/>*/}
                {/*    <img src="/images/icon/loupe.png" alt=""/>*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{

        data: state.serData.data,
        forSerNumber: state.serData.forSerNumber,

    }
}


export default connect (mapStateToProps, {sertification,     updateState})(Check);