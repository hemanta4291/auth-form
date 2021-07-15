import React from 'react'

const Reset = ({Link}) =>{
    return(
        <form className="col s12 reset__form">
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
            <Link to="/">Back</Link><Link to="/">Resend Code</Link>
            </div>
        </form>
    )
}

export default Reset