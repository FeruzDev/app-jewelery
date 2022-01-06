/**
 * Created by Sherlock on 07.01.2022.
 */
import React, {useEffect} from 'react';
import AdminLayout from "../layouts/AdminLayout";
import {API_PATH} from "../tools/constants";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {createLogo, deleteLogo, getLogos, updateState, uploadPhoto} from "../redux/actions/logoAction";

const Logo = (props) => {
    useEffect(() => {
        props.getLogos();
    }, [])

    return (
        <AdminLayout>
            <div className="content">
                <button type="button" className='btn btn-secondary my-3 d-block ml-auto'
                        onClick={() => props.updateState({isOpen: true, photo: null, selectedLogo: null,})}>Add Logo
                </button>

                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Фото</th>
                        <th>Линк</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.logos?.map(item => (
                        <tr>
                            <td><img src={API_PATH + "file/get/" + item.photo} width="100" alt=""/></td>
                            <td><a href={item.link} target="_blank">{item.link}</a></td>
                            <td>
                                <button type="button" className="btn btn-success mr-2" onClick={() => {props.updateState({isOpen: true, selectedLogo: item, photo: item.photo}); }}>Изменить</button>
                                <button type="button" className="btn btn-danger" onClick={() => props.updateState({isOpenDelete: true, selectedId: item.id})}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>




            <Modal isOpen={props.isOpen} toggle={() => props.updateState({isOpen: false, selectedLogo: null, photo: null})} className="bg-secondary">
                <AvForm onValidSubmit={props.createLogo} model={props.selectedLogo ? props.selectedLogo: {}}>
                    <ModalHeader className="bg-secondary">
                        Add Logo
                    </ModalHeader>
                    <ModalBody className="bg-secondary">
                        {props.selectedLogo ?
                            <AvField type="text" name="id" value={props.selectedLogo.id} className="d-none" /> :""
                        }

                        <div className="uploadPhoto">
                            {props.photo ?
                                <img src={API_PATH + "file/get/" + props.photo}      name="photo1" className="w-100 photo"/> :
                                <img src="/images/icon/camera.png" alt="camera.svg" className="camera  mr-3" style={{marginTop: "-5px"}}/>
                            }
                            <label htmlFor="file">Upload Logo</label>

                        </div>

                        <input type="file" className="d-none"   id="file"
                               onChange={(e) => props.uploadPhoto(e.target.files[0])}/>

                        <AvField type="text" name="photo" value={props.photo} className="d-none"   required/>
                        <AvField type="text" name="link" label="Линк" required/>
                    </ModalBody>
                    <ModalFooter className="bg-secondary justify-content-end">
                        <button type="submit" className="btn btn-dark mr-3"
                                disabled={props.isLoading}>{props.isLoading ?
                            <span className="spinner-border spinner-border-sm"/> : "Add"}</button>
                        <button type="button" className="btn btn-danger"
                                onClick={() => props.updateState({isOpen: false, selectedLogo: null})}>Close
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>
            <Modal isOpen={props.isOpenDelete} toggle={() => props.updateState({isOpenDelete: false, selectedId: null})}>
                <ModalHeader>
                    <h4 className="text-dark">Вы действительно хотите удалить?</h4>
                </ModalHeader>
                <ModalFooter>
                    <button type="button" className="btn btn-danger" onClick={props.deleteLogo}>Да</button>
                    <button type="button" className="btn btn-secondary" onClick={() => props.updateState({isOpenDelete: false, selectedId: null})}>Нет</button>
                </ModalFooter>
            </Modal>
        </AdminLayout>
    );
};


const mapStateToProps = (state) => {
    return {
        isOpen: state.logo.isOpen,
        isOpenDelete: state.logo.isOpenDelete,
        logos: state.logo.logos,
        photo: state.logo.photo,
        selectedId: state.logo.selectedId,
        selectedLogo: state.logo.selectedLogo,
        isLoading: state.logo.isLoading,
    }
}

export default connect(mapStateToProps, {updateState, uploadPhoto, createLogo, getLogos,deleteLogo})(Logo);