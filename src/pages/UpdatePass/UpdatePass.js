import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import FromLeft from "../../components/FormLeft/FormLeft"
import Update from "../../components/Update/Update"
import message from "../../assets/images/message.png"
 const Updatepass= ()=> {

    return (
        <div className="signup">
            <div className="container">
                <div className="signup__left">
                    <FromLeft/>
                </div>
                <div className="signup__right">
                    <div className="signup__right--content">
                        <div className="row form ">
                            <img className="message__img" src={message} alt="" />
                            <h4>Update Your Password</h4>
                            <p className="update__pass--p"> Enter the Code We just send to</p>
                            <span className="update__pass--span" >litondev@gmail.com</span>
                            <Update Link={Link}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Updatepass