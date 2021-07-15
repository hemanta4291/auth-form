import React from 'react'

const SignUp = ({openModal}) =>{
    return(
        <div className="row form">
            <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                <label >Email Address</label>
                <input id="first_nam" type="email" className="validate"/>
                
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <label >Full Name</label>
                <input id="first_nam" type="text" className="validate"/>
                
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <label >Password</label>
                <input id="password" type="password" className="validate"/>
                
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <label >Phone Number</label>
                <div className="phone__number">
                <select className="browser-default">
                    <option value="" disabled>Choose your option</option>
                    <option value="selected" >US</option>
                    <option value="2">BD</option>
                    <option value="3">In</option>
                </select>
                <input placeholder="+0154785412544" id="password" type="number" className="validate"/>
                </div>
                
                </div>
            </div>
            <div className="row row__dispaly">
                <div className="input-field input-field-extra col s12 m12">
                    <label>
                    <input type="checkbox" className="filled-in" />
                        <span className="check__singup">Get emails from Earn5 about product updates, industry news, and events. If you change your mind, you can unsubscribe at any time. Privacy Policy.</span>
                    </label>
                </div>
            </div>
            {/* <Link to="/" class="waves-effect waves-light btn-large submit__btn">Sign Up</Link> */}
            <button className="waves-effect waves-light btn-large submit__btn" onClick={openModal}>create account</button>
            </form>
        </div>
    )
}

export default SignUp