import React,{useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../FormLeft/FormLeft"
import Modal from 'react-modal';
import welcome from '../../assets/images/welcome.png'
import close from '../../assets/images/close.png'
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
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">
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
            <button className="modal__close" onClick={closeModal}><img src={close} alt="" /></button>
        </Modal>
    )
}
export default SignUp