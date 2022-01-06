import React, {useEffect} from 'react';
import AdminLayout from "../layouts/AdminLayout";
import {connect} from "react-redux";
import {createJewelery, getJeweleries, updateState, uploadPhoto, deleteJewelery} from "../redux/actions/jeweleryAction";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {API_PATH} from "../tools/constants";
import PaginationComponent from "../components/PaginationComponent";


const Jewelery = (props) => {


    useEffect(() => {
        props.getJeweleries(0);
    }, [])

    console.log(props.characteristics);

    const getCharacteristics = (diamonds) => {
        return diamonds?.map((item, index) => {
            props.updateState({characteristics: item.characteristics?.map((item2, index2) => {
                    // props.updateState({characteristics: props.characteristics.concat({diamondIndex: index, index: index2, ...item2})});
                    return {diamondIndex: index, index: index2, ...item2}
                })})
            return {}
        })
    }

    const getData = (payload) => {
        props.getJeweleries(payload.page, "");
    }

    console.log(props.diamonds)
    console.log(props.characteristics)
    return (
        <AdminLayout>
            <div className="content">
                <button type="button" className='btn btn-secondary my-3 d-block ml-auto'
                        onClick={() => props.updateState({isOpen: true, photo: null, diamonds: [], characteristics: [], selectedJewelery: null,})}>Add Jewelery
                </button>

                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Фото</th>
                        <th>Название</th>
                        <th>Дата</th>

                        <th>Посмотреть</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.jeweleries?.map(item => (
                        <tr>
                            <td>{item.serial}</td>
                            <td><img src={API_PATH + "file/get/" + item.photo} width="100" alt=""/></td>
                            <td>{item.name}</td>
                            <th>
                                {item.date?.substr(0, 10)}
                            </th>
                            <td>
                                <a href={"http://gcu.uz/certificate/" + item.serial} target="_blank" className="btn btn-success">Посмотреть</a>
                            </td>
                            <td>
                                <button type="button" className="btn btn-success mr-2" onClick={() => {props.updateState({nimadir: getCharacteristics(item.diamonds), isOpen: true, selectedJewelery: item, diamonds: item.diamonds, photo: item.photo, }); }}>Изменить</button>
                                <button type="button" className="btn btn-danger" onClick={() => props.updateState({isOpenDelete: true, selectedId: item.id})}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <PaginationComponent
                    totalPages={props.totalPages}
                    currentPage={props.page}
                    getPageData={getData}
                />
            </div>




            <Modal isOpen={props.isOpen} toggle={() => props.updateState({isOpen: false, diamonds: [], characteristics: [], selectedJewelery: null, photo: null})} className="bg-secondary">
                <AvForm onValidSubmit={props.createJewelery} model={props.selectedJewelery ? {...props.selectedJewelery, date: props.selectedJewelery.date.substr(0, 10)}: {}}>
                    <ModalHeader className="bg-secondary">
                        Add Jewelery
                    </ModalHeader>
                    <ModalBody className="bg-secondary">
                        {props.selectedJewelery ?
                            <AvField type="text" name="id" value={props.selectedJewelery.id} className="d-none" /> :""
                        }

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
                        <AvField type="date" name="date" value={props.selectedJewelery?.date.substr(6, 4) + "-" + props.selectedJewelery?.date.substr(3, 2) + "-" + props.selectedJewelery?.date.substr(0, 2)}  label="Date" required/>
                        <AvField type="textarea" name="comment" label="Comment"/>
                        {props.diamonds.map((item, index) => (
                            <div className="diamonds border mt-3 p-1">
                                {props.selectedJewelery ?
                                    <AvField type="text" name={`diamonds[${index}].id`} className="d-none" /> :""
                                }
                                <h5 className="mt-3">Diamond {index + 1} <span className="close" style={{cursor: "pointer"}} onClick={() => {
                                    props.updateState({characteristics: props.characteristics.filter((it, inddd) => it.diamondIndex !== index),
                                        diamonds: props.diamonds.filter((it, indd) => index !== indd),

                                    })
                                }
                                }>x</span></h5>
                                <AvField type="number" name={`diamonds[${index}].diamond`} label="Weight" required/>

                                {props.characteristics.filter(item => item.diamondIndex === index).map((item2, index2) => (
                                    <div className="characteristics border border-warning mt-3 p-1">
                                        {props.selectedJewelery ?
                                            <AvField type="text" name={`diamonds[${index}].characteristics[${index2}].id`} className="d-none" /> :""
                                        }
                                        <h5 className="mt-3">Characteristic {index2 + 1} <span className="close" style={{cursor: "pointer"}} onClick={() => {
                                            // console.log(props.characteristics.splice(item.index, 1));
                                            props.updateState({characteristics: props.characteristics.filter(item => item.index !== item2.index)})
                                        }}>x</span></h5>
                                        <AvField type="text" name={`diamonds[${index}].characteristics[${index2}].name`} label="Name" required/>
                                        <AvField type="text" name={`diamonds[${index}].characteristics[${index2}].valueOne`} label="Value one" required/>
                                        <AvField type="text" name={`diamonds[${index}].characteristics[${index2}].valueTwo`} label="Value two"/>
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
                                onClick={() => props.updateState({isOpen: false,diamonds: [], characteristics: [], selectedJewelery: null})}>Close
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>
            <Modal isOpen={props.isOpenDelete} toggle={() => props.updateState({isOpenDelete: false, selectedId: null})}>
               <ModalHeader>
                   <h4 className="text-dark">Вы действительно хотите удалить?</h4>
               </ModalHeader>
                <ModalFooter>
                    <button type="button" className="btn btn-danger" onClick={props.deleteJewelery}>Да</button>
                    <button type="button" className="btn btn-secondary" onClick={() => props.updateState({isOpenDelete: false, selectedId: null})}>Нет</button>
                </ModalFooter>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        isOpen: state.jewelery.isOpen,
        isOpenDelete: state.jewelery.isOpenDelete,
        jeweleries: state.jewelery.jeweleries,
        photo: state.jewelery.photo,
        diamonds: state.jewelery.diamonds,
        characteristics: state.jewelery.characteristics,
        selectedId: state.jewelery.selectedId,
        selectedJewelery: state.jewelery.selectedJewelery,
        page: state.jewelery.page,
        totalPages: state.jewelery.totalPages,
    }
}

export default connect(mapStateToProps, {updateState, uploadPhoto, createJewelery, getJeweleries,deleteJewelery})(Jewelery);