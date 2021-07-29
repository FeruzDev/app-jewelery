import React from 'react';
import AdminLayout from "../layouts/AdminLayout";
import {connect} from "react-redux";
import {updateState, uploadPhoto} from "../redux/actions/jeweleryAction";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {API_PATH} from "../tools/constants";

const Jewelery = (props) => {
    return (
        <AdminLayout>
            <div className="content">
                <button type="button" className='btn btn-secondary my-3 d-block ml-auto'
                        onClick={() => props.updateState({isOpen: true})}>Add Jewelery
                </button>
            </div>

            <Modal isOpen={props.isOpen} toggle={() => props.updateState({isOpen: false})} className="bg-secondary">
                <AvForm onValidSubmit={props.saveUser}>
                    <ModalHeader className="bg-secondary">
                        Add Jewelery
                    </ModalHeader>
                    <ModalBody className="bg-secondary">

                        <div className="uploadPhoto">
                            {props.photo ?
                                <img src={API_PATH + "file/get/" + props.photo} alt="photo" className="photo"/> :
                                <img src="/images/icon/camera.svg" alt="camera.svg" className="camera"/>
                            }
                            <label htmlFor="file">Upload Photo</label>

                        </div>

                        <input type="file" className="d-none" id="file"
                               onChange={(e) => props.uploadPhoto(e.target.files[0])}/>

                        <AvField type="text" name="name" label="Name" required/>
                        <AvField type="number" name="totalWeight" label="Total weight" required/>
                        <AvField type="text" name="metal" label="Metal" required/>
                        <AvField type="number" name="hallMark" label="Hall Mark" required/>
                        <AvField type="date" name="date" label="Date" required/>

                        {props.diamonds.map((item, index) => (
                            <div className="diamonds border-top">
                                <AvField type="number" name={`diamonds[${index}].diamond`} label="Weight" required/>

                                {item.characteristics.map((item2, index2) => (
                                    <div className="characteristics">
                                        <AvField type="number" name={`diamonds[${index}].characteristics[${index2}].name`} label="Weight" required/>
                                    </div>
                                ))}

                                <button type="button" className="btn btn-success d-block ml-auto my-2" onClick={async () => {
                                    let temp = props.diamonds
                                    console.log(props.diamonds[index].characteristics.concat({id: null, name: "", valueOne: "", valueTwo: ""}))
                                    // await temp[index].characteristics.push({id: null, name: "", valueOne: "", valueTwo: ""})
                                    props.updateState({diamonds: temp})
                                }}>
                                    Add characteristics
                                </button>
                            </div>
                        ))}

                        <button type="button" className="btn btn-block btn-success mt-5"
                                onClick={() => props.updateState({
                                    diamonds: props.diamonds.concat({
                                        id: null,
                                        diamond: 0,
                                        characteristics: []
                                    })
                                })}>Add diamond
                        </button>
                    </ModalBody>
                    <ModalFooter className="bg-secondary justify-content-end">
                        <button type="submit" className="btn btn-dark mr-3"
                                disabled={props.isLoading}>{props.isLoading ?
                            <span className="spinner-border spinner-border-sm"/> : "Add"}</button>
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
        isOpen: state.jewelery.isOpen,
        jeweleries: state.jewelery.jeweleries,
        photo: state.jewelery.photo,
        diamonds: state.jewelery.diamonds
    }
}

export default connect(mapStateToProps, {updateState, uploadPhoto})(Jewelery);