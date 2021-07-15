import React,{useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../../components/FormLeft/FormLeft"
import Modal from 'react-modal';
import welcome from '../../assets/images/welcome.png'
 const SignUp= ()=> {
    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    const openModal = (e)=> {
        e.preventDefault();
        setIsOpen(true);
      }
    const closeModal= ()=> {
        setIsOpen(false);
      }
    return (
        <div className="signup">
            <div className="container">
                <div className="signup__left">
                    <FromLeft/>
                </div>
                <div className="signup__right">
                    <div className="signup__right--content">
                        <h3>Create your Earn5 account </h3>
                        <span className="have__account">or Have an account?</span> <Link className="sing__up" to="/signin">Sing In</Link>
                        <div className="row form">
                            <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                <label >Email Address</label>
                                <input id="first_nam" type="email" className="validate"/>
                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                <label >Full Name</label>
                                <input id="first_nam" type="text" className="validate"/>
                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                <label >Password</label>
                                <input id="password" type="password" className="validate"/>
                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                <label >Phone Number</label>
                                <div className="phone__number">
                                <select className="browser-default">
                                    <option value="" disabled>Choose your option</option>
                                    <option value="selected" >US</option>
                                    <option value="2">BD</option>
                                    <option value="3">In</option>
                                </select>
                                <input placeholder="+0154785412544" id="password" type="number" className="validate"/>
                                </div>
                                
                                </div>
                            </div>
                            <div className="row row__dispaly">
                                <div className="input-field input-field-extra col s12 m12">
                                    <label>
                                        <input type="checkbox" />
                                        <span className="check__singup">Get emails from Earn5 about product updates, industry news, and events. If you change your mind, you can unsubscribe at any time. Privacy Policy.</span>
                                    </label>
                                </div>
                            </div>
                            {/* <Link to="/" class="waves-effect waves-light btn-large submit__btn">Sign Up</Link> */}
                            <button className="waves-effect waves-light btn-large submit__btn" onClick={openModal}>create account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <div className="modal__top">
                <img src={welcome} alt="" />
            </div>
            <div className="modal__content">
                <h3>Congratulations</h3>
                <p>Your account has beeen created succesfully. But you need to verify your account. So go to mail & verify your account. </p>
            </div>
            <div className="modal__btn__wr">
            <button className="modal__btn">Start Exploring</button>
            </div>
            <button className="modal__close" onClick={closeModal}>close</button>
      </Modal>
        </div>
    )
}
export default SignUp