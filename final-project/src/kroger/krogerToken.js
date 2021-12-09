// kroger testing api
// https://api-ce.kroger.com/v1/
// kroger tokens
const kroger_clientId = "final-project-6921b3aaa403fa41ff77a31b99c3af734984602975645764223"
const kroger_clientSecret = "8I7o6r7H-ASawmJzjCKGdQm97NBg7vG9qD-iQDr2"
const encoded = "Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg=="


export async function getAccessToken() {

  let tokenReponse = fetch('https://api-ce.kroger.com/v1/connect/oauth2/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg=='
    },
    body: 'grant_type=client_credentials&scope=product.compact'
}).then(function(res) {
  return res.json()
}).then(function(resJson) {
  console.log(resJson)
  return resJson
})

}