import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Home from'./components/Home'
import About from'./components/About'
import Services from'./components/Services'
import Rooms from'./components/Rooms'
import Gallary from'./components/Gallary'
import Contact from'./components/Contact'
import Location from'./components/Location'
import './App.css';

const App=()=>{
    const [barDetails,setBarDetails]=useState(false)

    const onShowBar = () => {
    setBarDetails((prevState) => !prevState);
    }
    return(
      <BrowserRouter>
      <div className="navMainContainer">
        <nav className="navBar">
            <p className="ParagraphTitle" >KingSukh <br/> Guest House</p>
            <div className="routesNavLink">
              <Link to="/" className="link"><p className="Paragraph">Home</p></Link>
              <Link to="/about" className="link"><p className="Paragraph">About</p></Link>
              <Link to="/service" className="link"><p className="Paragraph">Services</p></Link>
              <Link to="/rooms" className="link"><p className="Paragraph">Rooms</p></Link>
              <Link to="/gallary" className="link"><p className="Paragraph">Gallary</p></Link>
              <Link to="/contact" className="link"><p className="Paragraph">Contact</p></Link>
              <Link to="/location" className="link"><p className="Paragraph">Location</p></Link>
            </div>
            <button className="booknowbutton">BOOK NOW</button>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
      </Routes>
      </div>
      <div className="navBarMobileContainer">
        <nav className="navbarMobile">
          <h3>KingSukh <br/>Guest House</h3>
           {barDetails?<RxCross1  className="barOption" onClick={onShowBar}/>:<FaBars className="barOption" onClick={onShowBar}/>}
        </nav>
         <div className={barDetails?"routesNavMobileLink":"nonavBar"}>
              <Link to="/" className="link"><p className="Paragraph">Home</p></Link>
              <Link to="/about" className="link"><p className="Paragraph">About</p></Link>
              <Link to="/service" className="link"><p className="Paragraph">Services</p></Link>
              <Link to="/rooms" className="link"><p className="Paragraph">Rooms</p></Link>
              <Link to="/gallary" className="link"><p className="Paragraph">Gallary</p></Link>
              <Link to="/contact" className="link"><p className="Paragraph">Contact</p></Link>
              <Link to="/location" className="link"><p className="Paragraph">Location</p></Link>
            </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
        </Routes>

      </div>
          
      </BrowserRouter>    
        
    )
  
}
export default App;


