import sample from './video/backgroundvid.mp4';
import logo from './image/logo.png'
import background from './image/bg.jpg'
import './App.css';
import React, {useState, useEffect} from 'react'
import {getAccessToken} from './kroger/krogerToken'


function App() {
  
  let data = getAccessToken()
  return (
    <div className="App">


      <div className = "landingPage">
        <img src = {logo} className = "logo"/>
        <video className="bgVideo"  autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>

      </div>
      <div className = "infoPage">
           <div className = "landingLHS">
              <h1 className = "landingHeader">We Want to Find <br/>Cheap Beer For You </h1>
              <p className = "landingP">At the Cheap Canteen, we only want the cheapest and  <br/>most affordable options for our users. We show the hottest <br/> beer by known retailers and give you the cheapest options!  </p>
            </div>
      </div>
    </div>
  );
}

export default App;
