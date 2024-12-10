import './index.css'

const Gallary=()=>{
    return(
        <div className="gallaryMainContainer"> 
        <div className="horizontalAndGallaryTitle">
        <h4 className="gallaryHeading">Gallary</h4>
        </div>
        <div className="gallaryImageContainer">
            <div className="imageContainer1">
                <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1732540742/out_gixok0.jpg" alt="kingsukhguesthouse" className="image1"/>
                <div className="imageContainer2">
                    <div className="toprowImageContainer">
                        <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1732200798/ayodhya_dlteqd.webp" alt="mountains" className="image2"/>
                        <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1732888119/large_zdnfnc.jpg" alt="DiningTable" className="image3"/>
                        <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1732804002/palash_lufpum.webp" alt="TreesAndNature" className="image3"/>
                        

                    </div>
                    <div className="middlerowImageContainer">
                        <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1732888144/small_cevckh.jpg" alt="Bedroom" className="image3"/>
                        <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733483335/baranti_bmryth.webp" alt="hillWallpaper" className="image2"/>
                        <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733483411/recep_gfmeey.jpg" alt="warrand" className="image3"/>

                    </div>

                </div>
            </div>
            <div className="imageContainer3">
                <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733483675/flower_nyqowp.jpg" alt="buildingAndRoad" className="image3"/>
                <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733483960/room1_dm6qgs.jpg" alt="sampleGuestRoom" className="image2"/>
                <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733484047/mithonDam_jqiqlo.webp" alt="Dam" className="image3"/>
            </div>

        </div>
        

        </div>
    )
}
export default Gallary