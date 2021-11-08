import React from 'react';
import AdminLayout from "../layouts/AdminLayout";
import {connect} from "react-redux";
import {createJewelery, updateState, uploadPhoto} from "../redux/actions/jeweleryAction";
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
                <AvForm onValidSubmit={props.createJewelery}>
                    <ModalHeader className="bg-secondary">
                        Add Jewelery
                    </ModalHeader>
                    <ModalBody className="bg-secondary">

                        <div className="uploadPhoto">
                            {props.photo ?
                                <img src={API_PATH + "file/get/" + props.photo}      name="photo1" className="w-100 photo"/> :
                                <img src="/images/icon/camera.png" alt="camera.svg" className="camera  mr-3" style={{marginTop: "-5px"}}/>
                            }
                            <label htmlFor="file">Upload Photo</label>

                        </div>

                        <input type="file" className="d-none"   id="file"
                               onChange={(e) => props.uploadPhoto(e.target.files[0])}/>

                        <AvField type="text" name="photo" value={props.photo} className="d-none"   required/>
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
                                        <AvField type="number" name={`diamonds[${index}].characteristics[${index2}].name`} label="Weightt" required/>
                                    </div>
                                ))}

                                <button type="button" className="btn btn-success d-block ml-auto my-2" onClick={async () => {
                                    let temp = item;
                                    let temp2 = props.diamonds;
                                    temp.characteristics.concat({id: null, name: "", valueOne: "", valueTwo: ""});
                                    temp2.splice(index, 1, temp);
                                    props.updateState({diamonds: temp2})
                                }}>
                                    Add characteristics
                                </button>
                            </div>
                        ))}

                        <button type="button" className="btn btn-block btn-success mt-5"
                                onClick={() => {props.updateState({
                                    diamonds: props.diamonds.concat({
                                        id: null,
                                        diamond: 0,
                                        characteristics: []
                                    })
                                });
                                    let arr = [1,2,3,4];
                                    console.log(arr.splice(1, 1, 5));
                                }
                                }>Add diamond
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

export default connect(mapStateToProps, {updateState, uploadPhoto, createJewelery})(Jewelery);