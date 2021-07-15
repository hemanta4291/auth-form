import React from 'react'

const Forgot = ({Link}) =>{
    return(
        <form className="col s12 cmn__form">
            <div className="row">
                <div className="input-field col s12">
                <label>New Password</label>
                <input id="password" type="password" className="validate"/>
                
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <label>Confirm Password</label>
                <input id="password" type="password" className="validate"/>
                
                </div>
            </div>
            <Link to="/" className="waves-effect waves-light btn-large submit__btn forgot__btn">Update Password</Link>
        </form>
    )
}

export default Forgot