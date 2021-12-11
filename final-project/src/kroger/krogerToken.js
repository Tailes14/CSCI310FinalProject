// kroger testing api
// https://api-ce.kroger.com/v1/
// kroger tokens
const kroger_clientId = "final-project-6921b3aaa403fa41ff77a31b99c3af734984602975645764223"
const kroger_clientSecret = "8I7o6r7H-ASawmJzjCKGdQm97NBg7vG9qD-iQDr2"
const encoded = "Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg=="


/*
curl -X GET \
  'https://api-ce.kroger.com/v1/products?filter.term=beer&filter.locationId=01400943' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLWNlLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoidnl6bG52Y3dSUUZyRzZkWDBzU1pEQT09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJmaW5hbC1wcm9qZWN0LTY5MjFiM2FhYTQwM2ZhNDFmZjc3YTMxYjk5YzNhZjczNDk4NDYwMjk3NTY0NTc2NDIyMyIsImV4cCI6MTYzOTI0MTU3NCwiaWF0IjoxNjM5MjM5NzY5LCJpc3MiOiJhcGktY2Uua3JvZ2VyLmNvbSIsInN1YiI6IjU0MjI4ZWRjLWQzYmEtNTBhMi04MGEyLWU4ODMzMjdkM2NmYSIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjM5MjM5Nzc0OTU5MjUyOTA2LCJhenAiOiJmaW5hbC1wcm9qZWN0LTY5MjFiM2FhYTQwM2ZhNDFmZjc3YTMxYjk5YzNhZjczNDk4NDYwMjk3NTY0NTc2NDIyMyJ9.EAWSr0AOotERDEpSrHK1bZ6lfzFY9qZsSs3Cs2gLrRT1fv7INGy49B5sHmqnJISqghyrl2aZjOAOOLPIQYOnr0g39HWYtUJNo0EFgiPfhQmR-es2blRnz1KtG9IUUwQIpeGChm3cDPBaEKm3LCcfk72JRRpr-WHBIRRRDjiOE7nP86JNzK5Ehy-lQSCj9kAQr2GTdpYIxitv01SsRpYNgtoP-UtaP7zrr_IT89zBp1snHlbJDCEAnfE9ticXSE9Ai8T7MG7GbdwUAT_AlhQuy9ubOnbQxWpQqTtMfUUd7RkRyu7d-PiWYvA5mOWkM1qIvDXwSE_7xzEhnh-ddDbRCg'
  
  curl -X POST \
  'https://api-ce.kroger.com/v1/connect/oauth2/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Authorization: Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg==' \
  -d 'grant_type=client_credentials&scope=product.compact'

  curl -X GET \
  'https://api-ce.kroger.com/v1/locations?filter.zipCode.near=46227' \
  -H 'Cache-Control: no-cache' \
  -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLWNlLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoidnl6bG52Y3dSUUZyRzZkWDBzU1pEQT09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJmaW5hbC1wcm9qZWN0LTY5MjFiM2FhYTQwM2ZhNDFmZjc3YTMxYjk5YzNhZjczNDk4NDYwMjk3NTY0NTc2NDIyMyIsImV4cCI6MTYzOTIzOTgyMSwiaWF0IjoxNjM5MjM4MDE2LCJpc3MiOiJhcGktY2Uua3JvZ2VyLmNvbSIsInN1YiI6IjU0MjI4ZWRjLWQzYmEtNTBhMi04MGEyLWU4ODMzMjdkM2NmYSIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjM5MjM4MDIxMjY3NDMzNjM3LCJhenAiOiJmaW5hbC1wcm9qZWN0LTY5MjFiM2FhYTQwM2ZhNDFmZjc3YTMxYjk5YzNhZjczNDk4NDYwMjk3NTY0NTc2NDIyMyJ9.XekOE920S0jO03T2sW966_0xUhL0f-hi3CXu36NONFeIAkhoMhAOOvjTIY9CSHpEsgCx7Zaf2c7TYHuO-VSkS5xpAE6u8yf33kQzTToAbBOwAac8HcHs59pISfrOCBTI9GW4eI7cYZm9zEITAeDtVyX_KuSNropvDtdZBARPLAhL4mJwCwRVG53NP-RZAdaJwyoxtP4_2nGnP6F7bY7hlZQWj4H8R0Z2Yn0f3r2RJwrkWm_lAVO8r29ip6OZnT9nQpXk-rlbZOcv68z1Vmrp3XS8NNEuBbOlKK3T_3BzRNUOwVxMhIC_iqnSXphQAIMNiTgsvCtKhY8PDiuYvWcUwg'

*/

export async function getAccessToken() {

  let tokenReponse = await fetch('https://api-ce.kroger.com/v1/connect/oauth2/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg=='
    },
    body: 'grant_type=client_credentials&scope=product.compact'
}).then(function(res) {
  return res.json()
}).then(function(resJson) {
  return resJson
})
  return tokenReponse
}