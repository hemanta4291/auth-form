import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../../components/FormLeft/FormLeft"
import ResetC from "../../components/Reset/Reset"
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
                            <ResetC Link={Link}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reset