/**
 * Created by Sherlock on 25.07.2021.
 */

import React, {useEffect} from 'react';
import AdminLayout from "../layouts/AdminLayout";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {getUsers, saveUser, updateState} from "../redux/actions/adminUsersAction";

const DirectorUsers = (props) => {
    useEffect(() => {
        props.getUsers("worker");
    }, [])
    return (
        <AdminLayout>
            <button type="button" className='btn btn-secondary my-3 d-block ml-auto'
                    onClick={() => props.updateState({isOpen: true})}>Add Worker
            </button>
            <table className='table table-dark table-striped'>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Full name</th>
                    <th>Phone number</th>
                    {/*<th>Role</th>*/}
                </tr>
                </thead>
                <tbody>
                {props.users.map((item, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.firstName + " " + item.lastName}</td>
                        <td>{item.phoneNumber}</td>
                        {/*<td>{item.roles[0]?.description}</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>

            <Modal isOpen={props.isOpen} toggle={() => props.updateState({isOpen: false})} className="bg-secondary">
                <AvForm onValidSubmit={props.saveUser}>
                    <ModalHeader className="bg-secondary">
                        Add User
                    </ModalHeader>
                    <ModalBody className="bg-secondary">
                        <AvField type="text" name="firstName" label="Firstname" required/>
                        <AvField type="text" name="lastName" label="Lastname" required/>
                        <AvField type="text" name="phoneNumber" label="Phone number" required/>
                        <AvField type="email" name="email" label="Email" required/>
                        <AvField type="password" name="password" label="Password" required/>
                        <AvField type="select" name="role" label="Role" disabled value="Worker">
                            <option>Select</option>
                            <option value="Worker">Worker</option>
                            <option value="Director">Director</option>
                        </AvField>
                    </ModalBody>
                    <ModalFooter className="bg-secondary justify-content-end">
                        <button type="submit" className="btn btn-dark mr-3" disabled={props.isLoading}>{props.isLoading ? <span className="spinner-border spinner-border-sm"/> : "Add"}</button>
                        <button type="button" className="btn btn-danger"
                                onClick={() => props.updateState({isOpen: false})}>Close
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>

        </AdminLayout>
    );
};


const mapStateToProps = (state) => {
    return {
        users: state.adminUsers.users,
        isOpen: state.adminUsers.isOpen,
        isLoading: state.adminUsers.isLoading
    }
}

export default connect(mapStateToProps, {getUsers, updateState, saveUser})(DirectorUsers);