import sample from './video/backgroundvid.mp4';
import logo from './image/logo.png'
import background from './image/bg.jpg'
import './App.css';
import React, {useState, useEffect} from 'react'
import {getAccessToken} from './kroger/krogerToken'



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
  const [results, setResults] = useState([])
  const [search, setSearch] = useState('')
  const [cheapest, setCheap] = useState([])
  const [cheapestPrice, setPrice] = useState('Searching')

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


  const handleClick = async () => {
    const returnValues = await fetch('https://api-ce.kroger.com/v1/products?filter.term=liquor&filter.locationId=01400943&filter.limit=50', {
      method : 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization' : 'Bearer ' + token
      }
    })

    const data = await returnValues.json()
    setResults(data.data)
    
    results.map(pri => {setCheap(cheapest => [...cheapest, pri.items[0].price["regular"]])}) 

    const min = Math.min(...cheapest)
    setPrice(min)
    
    
    
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
              
            </div>
      </div>
      <div className = "searchDiv">
          <button onClick={handleClick} className =" button-17">Click to Find Beer</button>
          <input type = "text" placeholder = "Search Here" className = "searchbar" onChange= {event => {setSearch(event.target.value)}}/>
          <h1>{"Cheapest Beer is : $" +cheapestPrice}</h1>
      </div>
      <div className ="productPage">
          <ul className = "productsLayout">
          {results.filter(products => {if(search == ""){
                return products.brand}
                else if (products.brand.toLowerCase().includes(search.toLowerCase()) ){
                   return products.brand} })
            .map(products => <li className = "itemContentGrid">{ "$" + products.items[0].price["regular"]} 
            {" " + products.brand}  
            <img src = {products.images[0].sizes[0]["url"]} alt= "thumbnail" className = "productImg" className = "images"></img> 
              {}  
             </li>) }
          </ul>


      </div>
    </div>
  );
}

export default App;