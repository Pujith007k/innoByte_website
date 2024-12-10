import { PiShieldStarBold } from "react-icons/pi";
import { Ri24HoursFill } from "react-icons/ri";
import { IoMdRestaurant } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

import './index.css'

const Services=()=>{
    return(
        <div className="serviceContainer">
            <div className="serviceBG">
                <div className="serviceDescriptionContainer">
                    <div className="serviceDescription">
                        <div className="horizontalAndService">
                           <h4 className="serviceTitle">Service</h4>
                        </div>
                    <h1>Strive Only For the <br/> Best.</h1>
                    <div className="iconAndFeatureHeading">
                        <div className="iconContainerStar">
                            <PiShieldStarBold className="IconStar"/>
                        </div>
                        <p className="featureHeading">High class Security</p>
                    </div>  
                      <div className="iconAndFeatureHeading">
                        <div className="iconContainerHours">
                            <Ri24HoursFill  className="IconHrs"/>
                        </div>
                        <p className="featureHeading">24 Hours Room Service</p>
                    </div> 
                    <div className="iconAndFeatureHeading">
                        <div className="iconContainerRestaurant">
                            <IoMdRestaurant   className="IconRestaurant"/>
                        </div>
                        <p className="featureHeading">Restaurant</p>
                    </div> 
                     <div className="iconAndFeatureHeading">
                        <div className="iconContainerTourist">
                            <BiSupport   className="IconTourist"/>
                        </div>
                        <p className="featureHeading">Tourist Guide Support</p>
                    </div> 
                    </div>
                   
                </div>

            </div>
            <div className="serviceBottomContainer">
                <div className="serviceDetails">
                    <h1>100+</h1>
                    <p>Bookings Completed</p>
                </div>
                <div className="serviceDetails">
                    <h1>150+</h1>
                    <p>Happy Customers</p>
                </div>
            </div>

        </div>
    )
}
export default Services