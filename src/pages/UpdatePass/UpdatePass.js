import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../../components/FormLeft/FormLeft"
import message from "../../assets/images/message.png"
 const Updatepass= ()=> {

    return (
        <div className="signup">
            <div className="container">
                <div className="signup__left">
                    <FromLeft/>
                </div>
                <div className="signup__right">
                    <div className="signup__right--content">
                        <div className="row form">
                            <img className="message__img" src={message} alt="" />
                            <h4>Update Your Password</h4>
                            <p className="update__pass--p"> Enter the Code We just send to</p>
                            <span>litondev@gmail.com</span>
                            <form className="col s12">
                            <div className="row">
                                <div className="input-field col s4 m2">
                                 <input id="password" type="text" className="validate"/>
                                </div>
                                <div className="input-field col s4 m2">
                                 <input id="password" type="text" className="validate"/>
                                </div>
                                <div className="input-field col s4 m2">
                                 <input id="password" type="text" className="validate"/>
                                </div>
                                <div className="input-field col s4 m2">
                                 <input id="password" type="text" className="validate"/>
                                </div>
                                <div className="input-field col s4 m2">
                                 <input id="password" type="text" className="validate"/>
                                </div>
                                <div className="input-field col s4 m2">
                                 <input id="password" type="text" className="validate"/>
                                </div>
                            </div>
                            <div className="back__resend">
                            <Link to="/" class="">Back</Link><Link to="/" class="">Resend Code</Link>
                            </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Updatepass