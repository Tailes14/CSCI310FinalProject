import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import ajax from 'ajax'

// kroger testing api
// https://api-ce.kroger.com/v1/
// kroger tokens
const kroger_clientId = "final-project-6921b3aaa403fa41ff77a31b99c3af734984602975645764223"
const kroger_clientSecret = "8I7o6r7H-ASawmJzjCKGdQm97NBg7vG9qD-iQDr2"

const encoded = "Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg=="


const token = "temp"

function App() {

  let tokenReponse = fetch('https://api.kroger.com/v1/connect/oauth2/token', {
    method:"POST",
    headers: {
      "Content-Type" : "application/x-www-form-urlencoded",
     "Authorization":  encoded
    },
    body: 
      "grant_type=client_credentials&scope=product.compact"
  })

  if (tokenReponse.status >= 400) {
    console.log('error : ' + tokenReponse.error)
    throw new Error('token failed with status ' + tokenReponse.status )
  }

  /*
  curl --output - -X POST \
  'https://api.kroger.com/v1/connect/oauth2/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Authorization: Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg==' \
  -d 'grant_type=client_credentials&scope=product.compact'

  �VJ-*�/R�R*�K,-��/ʬJMQǧ�'e�d���d�%�d�($����d&�+����B
    */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
