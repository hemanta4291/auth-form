import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../../components/FormLeft/FormLeft"
 const Reset= ()=> {

    return (
        <div className="signup">
            <div className="container">
                <div className="signup__left">
                    <FromLeft/>
                </div>
                <div className="signup__right">
                    <div className="signup__right--content">
                        <h3>Sign in to your account</h3>
                        <span className="have__account">or Don't have an account?</span> <Link className="sing__up" to="/signup">Sing up</Link>
                        <div className="row form ">
                            <h4>Reset Your Password</h4>
                            <p> Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                            <form className="col s12 cmn__form">
                            <div className="row">
                                <div className="input-field col s12">
                                <label>Your Email</label>
                                <input id="password" type="password" className="validate"/>
                                
                                </div>
                            </div>
                            <Link to="signin" className="waves-effect waves-light btn-large submit__btn">Sign in</Link>
                            </form>
                            <div className="return">
                            <span className="return__span">Return to</span><Link to="signin">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reset