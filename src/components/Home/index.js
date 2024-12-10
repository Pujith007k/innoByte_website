import {Component} from 'react'

import './index.css';

class Home extends Component{
  render(){
    return(
     <div className="mainContainer">
        <div className="HomePage">
          <div className="quotationContainer">
            <p className="quotationParagraph">Simple - Unique - Friendly</p>
            <h1 className="quotationHeading">Make Yourself At Home <br/> In Our <span className="spanElement">Guest House</span>.</h1>
          </div>
        </div>
          <div className="booknowContainer">
            <button className="bookHomenowbutton">BOOK NOW</button>
          </div>
    </div>
    )
  }
}
export default Home;


