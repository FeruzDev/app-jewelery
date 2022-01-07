/**
 * Created by Sherlock on 06.01.2022.
 */
import React, {useEffect} from 'react';
import AdminLayout from "../layouts/AdminLayout";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {createPageData, getPageData, updateState} from "../redux/actions/pageDataAction";

const PageData = (props) => {
    useEffect(() => {
        props.getPageData();
    }, [])


    return (
        <AdminLayout>
            <div className="content">


                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Магазинов по всему Узбекистану</th>
                        <th>Специалистов гемологов доверяют нам</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.data.shops}</td>
                            <th>
                                {props.data.specialists}
                            </th>
                            <td>
                                <button type="button" className="btn btn-success mr-2" onClick={() => {props.updateState({isOpen: true});}}>Изменить</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <Modal isOpen={props.isOpen} toggle={() => props.updateState({isOpen: false,})} className="bg-secondary">
                <AvForm onValidSubmit={props.createPageData} model={props.data}>
                    <ModalHeader className="bg-secondary">
                        Change data
                    </ModalHeader>
                    <ModalBody className="bg-secondary">
                        <AvField type="number" name="shops" label="Магазинов по всему Узбекистану" required/>
                        <AvField type="number" name="specialists" label="Специалистов гемологов доверяют нам" required/>
                    </ModalBody>
                    <ModalFooter className="bg-secondary justify-content-end">
                        <button type="submit" className="btn btn-dark mr-3"
                                disabled={props.isLoading}>{props.isLoading ?
                            <span className="spinner-border spinner-border-sm"/> : "Change"}</button>
                        <button type="button" className="btn btn-danger" onClick={() => props.updateState({isOpen: false})}>Close</button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        isOpen: state.pageData.isOpen,
        data: state.pageData.data
    }
}

export default connect(mapStateToProps, {updateState, createPageData, getPageData})(PageData);