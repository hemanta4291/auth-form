import React from 'react'

const SignIn = ({Link}) =>{
    return(
        <div className="row form">
            <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                <label>First Name</label>
                <input id="first_nam" type="text" className="validate"/>
                
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <label>Password</label>
                <input id="password" type="password" className="validate"/>
                
                </div>
            </div>
            <div className="row row__dispaly">
                <div className="input-field input-field-extra col s12 m6">
                    
                    <label>
                    <input type="checkbox" className="filled-in" />
                        <span className="remember__me">Remember Me</span>
                    </label>
                </div>
                <div className="input-field col s12 m6 ">
                <Link className="forgot" to="forgot">Forgot Your Password?</Link>
                </div>
            </div>
            <Link to="signin" className="waves-effect waves-light btn-large submit__btn">Sign in</Link>
            </form>
        </div>
    )
}

export default SignIn