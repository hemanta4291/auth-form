import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../../components/FormLeft/FormLeft"
 const Forgot= ()=> {

    return (
        <div className="signup">
            <div className="container">
                <div className="signup__left">
                    <FromLeft/>
                </div>
                <div className="signup__right">
                    <div className="signup__right--content">
                        <div className="row form">
                            <h4>Update Your Password</h4>
                            <p> Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                            <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                <label for="password">New Password</label>
                                <input id="password" type="password" className="validate"/>
                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                <label for="password">Confirm Password</label>
                                <input id="password" type="password" className="validate"/>
                                
                                </div>
                            </div>
                            <Link to="/" class="waves-effect waves-light btn-large submit__btn">Update Password</Link>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Forgot