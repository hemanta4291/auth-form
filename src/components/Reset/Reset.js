import React from 'react'

const Reset = ({Link}) =>{
    return(
       <div>
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
    )
}

export default Reset