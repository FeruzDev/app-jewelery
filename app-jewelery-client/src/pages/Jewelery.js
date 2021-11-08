import React, {useEffect} from 'react';
import AdminLayout from "../layouts/AdminLayout";
import {connect} from "react-redux";
import {createJewelery, getJeweleries, updateState, uploadPhoto} from "../redux/actions/jeweleryAction";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {API_PATH} from "../tools/constants";


const Jewelery = (props) => {


    useEffect(() => {
        props.getJeweleries(0);
    }, [])

    console.log(props.characteristics);


    return (
        <AdminLayout>
            <div className="content">
                <button type="button" className='btn btn-secondary my-3 d-block ml-auto'
                        onClick={() => props.updateState({isOpen: true})}>Add Jewelery
                </button>

                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Метал</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.jeweleries?.map(item => (
                        <tr>
                            <td>{item.serial}</td>
                            <td>{item.name}</td>
                            <td>{item.metal}</td>
                            <td>
                                <a href={"http://localhost:3000/certificate/" + item.serial} target="_blank" className="btn btn-success">Посмотреть</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
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
                            <div className="diamonds border mt-3 p-1">
                                <h5 className="mt-3">Diamond {index + 1} <span className="close" style={{cursor: "pointer"}}>x</span></h5>
                                <AvField type="number" name={`diamonds[${index}].diamond`} label="Weight" required/>

                                {props.characteristics.filter(item => item.diamondIndex === index).map((item2, index2) => (
                                    <div className="characteristics border border-warning mt-3 p-1">
                                        <h5 className="mt-3">Characteristic {index2 + 1} <span className="close" style={{cursor: "pointer"}} onClick={() => {
                                            // console.log(props.characteristics.splice(item.index, 1));
                                            props.updateState({characteristics: props.characteristics.filter(item => item.index !== item2.index)})
                                        }}>x</span></h5>
                                        <AvField type="text" name={`diamonds[${index}].characteristics[${index2}].name`} label="Name" required/>
                                        <AvField type="text" name={`diamonds[${index}].characteristics[${index2}].valueOne`} label="Value one" required/>
                                        <AvField type="text" name={`diamonds[${index}].characteristics[${index2}].valueTwo`} label="Value two" required/>
                                    </div>
                                ))}

                                <button type="button" className="btn btn-success d-block ml-auto my-2" onClick={ () => {
                                        props.updateState({characteristics: props.characteristics.concat({
                                                id: null, name: "", valueOne: "", valueTwo: "", diamondIndex: index, index: props.characteristics.length
                                            })});
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
                                    })
                                })
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
        diamonds: state.jewelery.diamonds,
        characteristics: state.jewelery.characteristics
    }
}

export default connect(mapStateToProps, {updateState, uploadPhoto, createJewelery, getJeweleries})(Jewelery);