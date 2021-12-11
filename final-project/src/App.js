import sample from './video/backgroundvid.mp4';
import logo from './image/logo.png'
import background from './image/bg.jpg'
import './App.css';
import React, {useState, useEffect} from 'react'
import {getAccessToken} from './kroger/krogerToken'

async function getProductKroger(term, setResults) 
{
  let data = await getAccessToken()
  let response = await fetch('https://api-ce.kroger.com/v1/products?filter.term=' + term, {
    method : 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization' : 'Bearer ' + data.access_token
    }
  }).then(function(res) {
    console.log(res)
  })
  setResults(response)
  return response
}



function App() {
  /*
  const [results, setResults] = useState()
  const handleClick = () => {
    let temp = getProductKroger('beer', setResults).then(result => {
      console.log(result)
    })
    console.log(results)
  }
  */
  const [token, setToken] = useState('')
  const [results, setResults] = useState('')

  useEffect(() => {
    if (!token) {
      getToken()
    }
    console.log(token)
  }, [])

  const getToken = async () => {
    const tokenResponse = await fetch('https://api-ce.kroger.com/v1/connect/oauth2/token', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg=='
      },
      body: 'grant_type=client_credentials&scope=product.compact'
    })
    const data = await tokenResponse.json()
    setToken(data.access_token)
  }

  const handleLocation = async () => {
    const returnValues = await fetch('https://api-ce.kroger.com/v1/locations?filter.zipCode.near=46227', {
      method: 'GET',
      cache: "no-cache",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
    const data = await returnValues.json()
    console.log(data)
  }

  const handleClick = async () => {
    const returnValues = await fetch('https://api-ce.kroger.com/v1/products?filter.term=alcohol&filter.locationId=01400943', {
      method : 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization' : 'Bearer ' + token
      }
    }).catch((err) => console.log(err))
    const data = await returnValues.json()
    console.log(data)
    setResults(data)
  }
  
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
              <button onClick={handleClick}>Test</button>
            </div>
      </div>
    </div>
  );
}

export default App;
