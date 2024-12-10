import './index.css'

const About=()=>{
    return (
        <div className="aboutMainContainer"> 
            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1732540742/out_gixok0.jpg" className="aboutImage" alt="homeImage"/>
            <div className="DescriptionConatiner">
                <div className="horizontalAndTitle">
                <p className="aboutTitle">ABOUT US </p>
                </div>
                <h1 className="aboutHeading">The Best Holidays Start <br/> Here!</h1>
                <p className="aboutParagraph">Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, 
                    Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, 
                    and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality.
                     Explore the hidden gems of Purulia, creating memories that linger long after your stay.
                </p>
                <p className="aboutParagraphAddress">
                    Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                </p>
                <p className="aboutParagraphContact">Contact us: +91 9007062180</p>
                <button className="aboutBookNow">BOOK NOW</button>
            </div>

        </div>
    )
}
export default About