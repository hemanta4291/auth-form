import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../../components/FormLeft/FormLeft"
import SignInC from "../../components/SignIn/SignIn"
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
                        <span className="have__account">or Don't have an account?</span> <Link className="sing__up" to="/signup">Sing up</Link>
                       <SignInC Link={Link}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn