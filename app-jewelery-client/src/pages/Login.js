import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {login} from "../redux/actions/authAction";

const Login = (props) => {
    return (
        <div className="login-page">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 pt-5">
                        <div className="card bg-dark mt-5">
                            <div className="card-header bg-dark">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <AvForm onValidSubmit={(e, v) => props.login(props.history, v)}>
                                    <AvField
                                        name="phoneNumber"
                                        type="text"
                                        required
                                        label="Phone number"
                                    />
                                    <AvField
                                        name="password"
                                        type="password"
                                        required
                                        label="Password"
                                    />
                                    <button type="submit" className="btn btn-success btn-block" disabled={props.isLoading}>{props.isLoading ? <span className="spinner-border spinner-border-sm"/> : "Login"}</button>
                                </AvForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps =(state) => {
    console.log(state);
    return{
        isLoading: state.auth.isLoading
    }
}

export default connect(mapStateToProps, {login})(Login);