import {Component} from 'react'
import { GrLocation } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './index.css'

class Contact extends Component{
    render(){
        return(
            <div className="contactMaincontainer">
                <div className="container">
                   <form className="formDetails">
                    <h1 className="formHeading">Send a Message</h1>
                    <div className="form-row">
                        <div className="input-data">
                           <input type="text" required/>
                           <div className="underline"></div>
                           <label for="">First Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label for="">Last Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                           <input type="text" required/>
                           <div className="underline"></div>
                            <label for="">Email Address</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required/>
                            <div className="underline"></div>
                            <label for="">Website Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                        <textarea rows="8" cols="80" required></textarea>
                        <br />
                        <div className="underline"></div>
                        <label for="">Write your message here...</label>
                        <br />
                        
                    </div>
                    </div>
                    <button className="sendButton">Send</button>
                </form>
              </div>
                <div className="contactInfo">
                 <div className="contactInsideContainer">
                    <h4 className="contactHeading">Contact info</h4>
                    <div className="contactLocationContainer">
                        <GrLocation className="icons" />
                        <p>Beside Barshal Water Tank,<br/> Manpur, Barhanti,<br/>West Bengal 723156</p>
                    </div>
                    <div className="contactLocationContainer">
                        <MdMailOutline className="icons" />
                        <p>kkghosh0099@gmail.com</p>
                    </div>
                    <div className="contactLocationContainer">
                        <FiPhoneCall className="icons"/>
                        <p>+91 9007062180</p>
                    </div>
                 </div>
                     <div className="socialMediaIconsContact">
                        <FaFacebookF className="icons"/>
                        <FaInstagram className="icons"/>
                        <FaTwitter className="icons"/>
                        <FaLinkedinIn className="icons" />
                    </div>
                    
                </div>
            
            </div>
        )
    }
}

export default Contact