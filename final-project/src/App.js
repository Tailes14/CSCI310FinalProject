import sample from './video/backgroundvid.mp4';
import logo from './image/logo.png'
import background from './image/bg.jpg'
import './App.css';
import React, {useState} from 'react'
import {getAccessToken} from './kroger/krogerToken'


function App() {
  const [accessTokenK, setAccessTokenK] = useState()
  

  return (
    <div className="App">


      <div className = "landingPage">
        <img src = {logo} className = "logo"/>
        <video className="bgVideo"  autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>

      </div>
      <div className = "infoPage">
        
      </div>
    </div>
  );
}

export default App;
