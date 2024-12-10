import { FaHeart } from "react-icons/fa";
import { RiPaintFill } from "react-icons/ri";
import { PiShieldStarBold } from "react-icons/pi";
import './index.css'

const Rooms=()=>{
    return(
    <div className="roomMainContainer">
        <div className="roomDescriptionContainer">
            <div className="horizontalAndRoomTitle">
                <p className="roomtitle">OUR LIVING ROOM</p>
            </div>
            
            <h1 className="roomHeading">The Most Memorable Rest <br/> Time Starts Here.</h1>
            <div className="roomListContainer">
                <div className="roomOne">
                    <div className="RoomOnebgImage">
                        <div className="IconContainer">
                            <div className="heartIcon">
                                <FaHeart  className="heart"/>
                            </div>
                            <div className="heartIcon">
                                <RiPaintFill className="Paintfill"/>
                            </div>
                            <div className="heartIcon">
                                <PiShieldStarBold  className="star"/>
                            </div>
                        </div>

                    </div>
                    <div className="roomOneDescription">
                        <h3 className="roomOneHeading">Cozy Haven Room</h3>
                        <p className="roomOneParagraph">Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
                        <p className="roomOneParagraph">Starting from <span className="Rupees">Rs.1000/night</span></p>
                        <button className="roomOneButton">BOOK NOW</button>
                    </div>

                </div>
                 <div className="roomOne">
                    <div className="RoomSecondbgImage">
                        <div className="IconContainer">
                            <div className="heartIcon">
                                <FaHeart  className="heart"/>
                            </div>
                            <div className="heartIcon">
                                <RiPaintFill className="Paintfill"/>
                            </div>
                            <div className="heartIcon">
                                <PiShieldStarBold  className="star"/>
                            </div>
                        </div>

                    </div>
                    <div className="roomOneDescription">
                        <h3 className="roomOneHeading">Spacious Serenity Suite</h3>
                        <p className="roomOneParagraph">Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
                        <p className="roomOneParagraph">Starting from <span className="Rupees">Rs.1500/night</span></p>
                        <button className="roomOneButton">BOOK NOW</button>
                    </div>

                </div>

            </div>
        </div>

    </div>
    )
}

export default Rooms