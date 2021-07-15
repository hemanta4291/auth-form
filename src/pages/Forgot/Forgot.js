import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../../components/FormLeft/FormLeft"
import ForgotC from "../../components/Forgot/Forgot"
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
                            <ForgotC Link={Link}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Forgot