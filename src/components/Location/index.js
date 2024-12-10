import GoogleMapReact from 'google-map-react';
import './index.css'


const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Location=()=>{
      const defaultProps = {
           center: {
                lat: 23.586607310542018,
                lng: 86.859661253973
            },
            zoom: 11
        };
    return(
        <div>
            <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            <AnyReactComponent
                lat={23.586607310542018}
                lng={86.859661253973}
                text="KingSukh Guest House"
            />
            </GoogleMapReact>
            </div>
            <div className="footerContainer">
                <div className="insideFooter">
                    <div className="descriptionContainer">
                        <h4 className="footerHeading">KingSukh <br/> Guest <br/> House</h4>
                        <p className="footerDescription">Discover a world comfort, <br/> luxury, and adventure as you <br/> explore our curated selection of <br/> hostels, making every moment of,<br/> your getaway truly extraordinary.</p>
                        <button className="footerbookNowButton">BOOK NOW</button>
                    </div>
                    <div className="descriptionContainer">
                        <h4 className="footerHeading">QUICK LINKS</h4>
                        <p className="footerParagraph">Browse Destinations</p>
                        <p className="footerParagraph">Special Offers & Packages</p>
                        <p className="footerParagraph">Room Types & Amenities</p>
                        <p className="footerParagraph">Customer Reviews & Ratings</p>
                        <p className="footerParagraph">Travel Tips & Guides</p>
                    </div>
                    <div className="descriptionContainer">
                        <h4 className="footerHeading">OUR SERVICES</h4>
                        <p className="footerParagraph">Concierge Assistance</p>
                        <p className="footerParagraph">Flexible Booking Options</p>
                        <p className="footerParagraph">Airport Transfers</p>
                        <p className="footerParagraph">Wellness & Recreation</p>
                    </div>
                    <div className="descriptionContainer">
                        <h4 className="footerHeading">CONTACT US</h4>
                        <p className="footerParagraph">Address: Beside Barshal Water <br/> Tank,Manpur, West <br/> Bengal 723156</p>
                        <p className="footerParagraph">kkghosh0099@gmail.com</p>
                        <p className="footerParagraph">+91 9007062180</p>
                        <div className="footerSocialMediaContainer">
                            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733576819/facebook_tborgj.png" alt="facebook" className="socialMediaIcons"/>
                            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733576825/instagram_yqvaiv.png" alt="instagram" className="socialMediaIcons"/>
                            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733576840/youtube_ytwnuw.png" alt="youtube" className="socialMediaIcons"/>
                            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733576833/twitter_e3oajy.png" alt="twitter" className="socialMediaIcons"/>
                        </div>
                   
                    </div>


                </div>
                <p className="CopyRights">Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>

            </div>
        </div>
    )

}

export default Location