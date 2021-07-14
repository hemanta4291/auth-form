import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../../components/FormLeft/FormLeft"
 const SignIn= ()=> {

    return (
        <div className="signup">
            <div className="container">
                <div className="signup__left">
                    <FromLeft/>
                </div>
                <div className="signup__right">
                    <div className="signup__right--content">
                        <h3>Sign in to your account</h3>
                        <span>or Don't have an account?</span> <Link to="/signup">Sing up</Link>
                        <div className="row form">
                            <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                <label for="first_name">First Name</label>
                                <input id="first_nam" type="text" className="validate"/>
                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                <label for="password">Password</label>
                                <input id="password" type="password" className="validate"/>
                                
                                </div>
                            </div>
                            <div className="row row__dispaly">
                                <div className="input-field input-field-extra col s12 m6">
                                    <label>
                                        <input type="checkbox" />
                                        <span>Remember Me</span>
                                    </label>
                                </div>
                                <div className="input-field col s12 m6">
                                <Link to="forgot">Forgot Your Password?</Link>
                                </div>
                            </div>
                            <Link to="signin" class="waves-effect waves-light btn-large submit__btn">Sign in</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn