import React from 'react'
import logo from '../../assets/images/whitelogo.png'
// import logoback from '../../assets/images/logoBack.png'
 const FromLeft= ()=> {

    return (
        <div className="signup__left--content">
            {/* <div className="logo__back">
                <img src={logoback} alt="" />
            </div> */}
            <img src={logo} alt="" />
            <h3>Review Your Bussiness</h3>
            <p>Keep your reputation intact with Business Review Central. Create your 
            account today and manage your reviews.</p>
        </div>
    )
}
export default FromLeft