import React, {useEffect} from 'react';
import Footer from "../components/Footer";
import {connect} from "react-redux";
import {sertification, updateState} from "../redux/actions/SerAction";
import {API_PATH} from "../tools/constants";
import {Modal, ModalBody, ModalFooter} from "reactstrap";

const Ser = (props) => {


    useEffect(() => {
        props.sertification(props.match.params.id);
    }, [])


    const mOne = () => {

        props.updateState({modalOpendOne: !props.modalOpendOne})

    }


    const mTwo = () => {

        props.updateState({modalOpendTwo: !props.modalOpendTwo})

    }


    const mThree = () => {

        props.updateState({modalOpendThree: !props.modalOpendThree})

    }

    return (
        <div className="ser">
            <div className="serBack">
                <div className="container">
                    <div className="sub-title">
                        <h1>Diamond Certificate</h1>
                    </div>
                    <div className="title mt-5">
                        <div></div>
                        <h2>Информация об изделии</h2>
                        <div></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={API_PATH + "file/get/" + props.data.photo} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="st">
                                        <h3>ID</h3>
                                        <div className="stChild">
                                            <span>{props.data.serial}</span>
                                        </div>
                                    </div>
                                    <div className="st">
                                        <h3>Item</h3>
                                        <div className="stChild">
                                            <span>{props.data.name}</span>
                                        </div>
                                    </div>
                                    <div className="st">
                                        <h3>Metal</h3>
                                        <div className="stChild">
                                            <span>{props.data.metal} </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="st">
                                        <h3>Date</h3>
                                        <div className="stChild">
                                            <span>{props.data.date?.slice(0, 10)}</span>
                                        </div>
                                    </div>
                                    <div className="st">
                                        <h3>Total weight, g</h3>
                                        <div className="stChild">
                                            <span>{props.data.totalWeight}</span>
                                        </div>
                                    </div>
                                    <div className="st">
                                        <h3>Hall mark</h3>
                                        <div className="stChild">
                                            <span>{props.data.hallMark}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="characters">
                <div className="container">
                    <div className="title mt-5">
                        <div></div>

                        <h2>Характеристики вставок</h2>
                        <div></div>
                    </div>

                    <div className="row">


                        {/*for   characteristics */}


                        {
                            props.data.diamonds?.map(item => (

                                <div className="col-md-6">
                                    <div className="st">
                                        <h3>Diamond</h3>
                                        <div className="stChild">
                                            <span>{item.diamond + " ct"}</span>
                                        </div>
                                        <h6>таблица</h6>
                                    </div>
                                    {
                                        item.characteristics?.map(item2 => (
                                            <div className="row">

                                                <div className="st w-100 pl-3">

                                                    <h3>{item2.name}</h3>

                                                    <div className="row w-100  ">
                                                        {item2.valueOne ?
                                                            <div className={`col-${item2.valueTwo ? "6" : "12"} p-3`}>
                                                                <div className="stChild">
                                                                    <span>{item2.valueOne}</span>
                                                                </div>
                                                            </div> : ""
                                                        }
                                                        {item2.valueTwo ?
                                                            <div className="col-6 p-3">
                                                                <div className="stChild">
                                                                    <span>{item2.valueTwo}</span>
                                                                </div>
                                                            </div> : ""
                                                        }
                                                    </div>
                                                    <button
                                                        onClick={item2.name === "Color Scale" ? mOne : item2.name === "Clarity scale" ? mTwo : item2.name === "Cut scale" ? mThree : ""}
                                                        className="table-button"><h6>таблица</h6>
                                                    </button>
                                                </div>
                                            </div>

                                        ))
                                    }


                                </div>
                            ))
                        }


                        <div className="row w-100 ">


                            <div className="col-md-6 ">
                                <div className="st pl-3">
                                    <h3>Комментарий</h3>
                                    <div className="stChildT">
                                        <span>VVVV</span>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="st pr-5 pl-3">
                                    <h3>Эксперт-геммолог</h3>
                                    <div className="stChildB">
                                        <span>{props.data.expertFirstName?.substr(0, 1)}. {props.data.expertLastName}</span>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </div>

            <Modal isOpen={props.modalOpendOne} className="modal-style">
                <button onClick={mOne} className='close-x '> x</button>

                <p>Система классификации бриллиантов от D до Z, измеряет степень бесцветности, сравнивая камень при
                    контролируемом освещении и точных условиях просмотра с эталонными камнями установленной цветовой
                    ценности.
                </p>

                <h4>Color Scale</h4>
                <table>
                    <tr>
                        <th>Colorless</th>
                        <th></th>
                        <th></th>
                        <th>Near colorless</th>
                        <th></th>
                        <th></th>
                        <th></th>

                        <th>Faint</th>
                        <th></th>
                        <th></th>
                        <th></th>

                        <th>Very light</th>
                        <th></th>
                        <th></th>

                        <th>Faint</th>
                        <th></th>
                        <th></th>
                        <th></th>


                        <th>Very light</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>
                </table>
                <table>


                    <tr>
                        <td>
                            <div>D</div>
                        </td>
                        <td>
                            <div>E</div>
                        </td>
                        <td>
                            <div>F</div>
                        </td>
                        <td>
                            <div>G</div>
                        </td>
                        <td>
                            <div>H</div>
                        </td>
                        <td>
                            <div>I</div>
                        </td>
                        <td>
                            <div>J</div>
                        </td>
                        <td>
                            <div>K</div>
                        </td>
                        <td>
                            <div>L</div>
                        </td>
                        <td>
                            <div>M</div>
                        </td>
                        <td>
                            <div>N</div>
                        </td>
                        <td>
                            <div>O</div>
                        </td>
                        <td>
                            <div>P</div>
                        </td>
                        <td>
                            <div>Q</div>
                        </td>
                        <td>
                            <div>R</div>
                        </td>
                        <td>
                            <div>S</div>
                        </td>
                        <td>
                            <div>T</div>
                        </td>
                        <td>
                            <div>U</div>
                        </td>
                        <td>
                            <div>V</div>
                        </td>
                        <td>
                            <div>W</div>
                        </td>
                        <td>
                            <div>X</div>
                        </td>
                        <td>
                            <div>Y</div>
                        </td>
                        <td>
                            <div>Z</div>
                        </td>


                    </tr>

                    <tr>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>

                    </tr>

                </table>
            </Modal>


            <Modal isOpen={props.modalOpendOne} className="modal-style-mob">
                <button onClick={mOne} className='close-x '> x</button>

                <h4>Color Scale</h4>


                <table>
                    <tr>
                        <th>Colorless</th>
                        <th></th>
                        <th></th>
                        <th>Near colorless</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </table>







                <table>
                   <tr> <td>
                       <div>D</div>
                   </td>
                       <td>
                           <div>E</div>
                       </td>
                       <td>
                           <div>F</div>
                       </td>
                       <td>
                           <div>G</div>
                       </td>
                       <td>
                           <div>H</div>
                       </td>
                       <td>
                           <div>I</div>
                       </td>
                       <td>
                           <div>J</div>
                       </td></tr>
                    <tr>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>

                    </tr>
                </table>



                <table>
                    <tr>

                        <th>Faint</th>
                        <th></th>
                        <th></th>
                        <th></th>

                        <th>Very light</th>
                        <th></th>
                        <th></th>

                    </tr>
                </table>

                <table>

                  <tr>
                      <td>
                          <div>K</div>
                      </td>
                      <td>
                          <div>L</div>
                      </td>
                      <td>
                          <div>M</div>
                      </td>
                      <td>
                          <div>N</div>
                      </td>
                      <td>
                          <div>O</div>
                      </td>
                      <td>
                          <div>P</div>
                      </td>
                      <td>
                          <div>Q</div>
                      </td>
                  </tr>
                    <tr>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>

                    </tr>
                </table>
                <table>
                    <tr>


                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                        <th>  light</th>
                        <th></th>
                        <th></th>


                    </tr>
                </table>
                <table>


                    <tr>

                        <td>
                            <div>R</div>
                        </td>
                        <td>
                            <div>S</div>
                        </td>
                        <td>
                            <div>T</div>
                        </td>
                        <td>
                            <div>U</div>
                        </td>
                        <td>
                            <div>V</div>
                        </td>
                        <td>
                            <div>W</div>
                        </td>
                        <td>
                            <div>X</div>
                        </td>
                        <td>
                            <div>Y</div>
                        </td>
                        <td>
                            <div>Z</div>
                        </td>


                    </tr>

                    <tr>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>

                    </tr>


                </table>



                <p>Система классификации бриллиантов от D до Z, измеряет степень бесцветности, сравнивая камень при
                    контролируемом освещении и точных условиях просмотра с эталонными камнями установленной цветовой
                    ценности.
                </p>

            </Modal>
            <Modal isOpen={props.modalOpendTwo} className="modal-style2 modal-style">
                <button onClick={mTwo} className='close-x '> x</button>

                <p>
                    В верхней части - обозначения бриллиантов с минимальным количеством включений, в нижней обозначения
                    характерные для бриллиантов с включениями видными невооруженным взглядом.
                </p>

                <h4>Сlarity scale</h4>
                <table>
                    <tr>

                        <th>Very very slightly
                            included</th>
                        <th></th>
                        <th>Very slightly included</th>
                        <th></th>
                        <th>Slightly included</th>
                        <th></th>
                        <th>Included</th>
                        <th></th>
                        <th></th>

                    </tr>
                </table>
                <table>




                    <tr>

                        <td>
                            <div>VVS1</div>
                        </td>

                        <td>
                            <div>VVS2</div>
                        </td>
                        <td>
                            <div>VS1</div>
                        </td>
                        <td>
                            <div>VS2</div>
                        </td>
                        <td>
                            <div>SI1</div>
                        </td>
                        <td>
                            <div>SI2</div>
                        </td>
                        <td>
                            <div>I1</div>
                        </td>
                        <td>
                            <div>I2</div>
                        </td>
                        <td>
                            <div>I3</div>
                        </td>

                    </tr>



                    <tr>

                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                    </tr>

                </table>
            </Modal>

            <Modal isOpen={props.modalOpendTwo} className=" modal-style-mob">
                <button onClick={mTwo} className='close-x '> x</button>


                <h4>Сlarity scale</h4>

                <table>
                    <tr>

                        <th>Very very slightlyl
                            included</th>
                        <th></th>


                    </tr>
                </table>


                <table>
                    <tr>
                        <td>
                            <div>VVS1</div>
                        </td>

                        <td>
                            <div>VVS2</div>
                        </td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <td><div></div></td>
                        <td><div></div></td>
                    </tr>
                </table>



                <table>
                    <tr>
                        <th>Very slightly included</th>
                        <th></th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <div>VVS1</div>
                        </td>

                        <td>
                            <div>VVS2</div>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><div></div></td>
                        <td><div></div></td>
                    </tr>
                </table>




                <table>
                    <tr>
                        <th>Slightly included</th>
                        <th></th>
                    </tr>
                </table>





                <table>
                    <tr>
                        <td>
                            <div>Sl1</div>
                        </td>

                        <td>
                            <div> Sl2</div>
                        </td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <td><div></div></td>
                        <td><div></div></td>
                    </tr>
                </table>













                <table>
                    <tr>


                        <th>Included</th>
                        <th></th>
                        <th></th>

                    </tr>
                </table>
                <table>




                    <tr>


                        <td>
                            <div>I1</div>
                        </td>
                        <td>
                            <div>I2</div>
                        </td>
                        <td>
                            <div>I3</div>
                        </td>

                    </tr>



                    <tr>


                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                    </tr>

                </table>


                <p>
                    В верхней части - обозначения бриллиантов с минимальным количеством включений, в нижней обозначения
                    характерные для бриллиантов с включениями видными невооруженным взглядом.
                </p>

            </Modal>

            <Modal isOpen={props.modalOpendThree} className="modal-style3 modal-style">
                <button onClick={mThree} className='close-x '> x</button>

                <p>
                    Шкала качества огранки (отличная, очень хорошая, хорошая, удовлетворительная, плохая).
                </p>

                <h4>Cut Scale</h4>

                <table>




                    <tr>

                        <td>
                            <div>EXCELLENT</div>
                        </td>

                        <td>
                            <div>VERY <br/> GOOD</div>
                        </td>
                        <td>
                            <div>GOOD</div>
                        </td>
                        <td>
                            <div>FAIR</div>
                        </td>
                        <td>
                            <div>POOR</div>
                        </td>

                    </tr>



                    <tr>

                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>

                    </tr>

                </table>
            </Modal>

            <Modal isOpen={props.modalOpendThree} className="modal-style-mob">
                <button onClick={mThree} className='close-x '> x</button>



                <h4>Cut Scale</h4>



                <table>
                    <tr>

                        <td>
                            <div>EXCELLENT</div>
                        </td>

                        <td>
                            <div>VERY <br/> GOOD</div>
                        </td>
                        <td>
                            <div>GOOD</div>
                        </td>
                    </tr>
                    <tr>
                        <td><div></div></td>
                        <td><div></div></td>
                        <td><div></div></td>
                    </tr>
                </table>


                <table className='mt-4'>

                    <tr>

                        <td>
                            <div>FAIR</div>
                        </td>
                        <td>
                            <div>POOR</div>
                        </td>

                    </tr>



                    <tr>

                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>


                    </tr>

                </table>


                <p>
                    Шкала качества огранки (отличная, очень хорошая, хорошая, удовлетворительная, плохая).
                </p>
            </Modal>
            <Footer/>

        </div>
    );
};


const mapStateToProps = (state) => {
    return {

        data: state.serData.data,
        modalOpendOne: state.serData.modalOpendOne,
        modalOpendTwo: state.serData.modalOpendTwo,
        modalOpendThree: state.serData.modalOpendThree,

    }
}
export default connect(mapStateToProps, {sertification, updateState})(Ser);