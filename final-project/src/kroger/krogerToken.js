// kroger testing api
// https://api-ce.kroger.com/v1/
// kroger tokens
const kroger_clientId = "final-project-6921b3aaa403fa41ff77a31b99c3af734984602975645764223"
const kroger_clientSecret = "8I7o6r7H-ASawmJzjCKGdQm97NBg7vG9qD-iQDr2"
const encoded = "Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg=="


/*
curl -X GET \
  'https://api-ce.kroger.com/v1/products?filter.term=beer' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLWNlLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoidnl6bG52Y3dSUUZyRzZkWDBzU1pEQT09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJmaW5hbC1wcm9qZWN0LTY5MjFiM2FhYTQwM2ZhNDFmZjc3YTMxYjk5YzNhZjczNDk4NDYwMjk3NTY0NTc2NDIyMyIsImV4cCI6MTYzOTIzOTU0NiwiaWF0IjoxNjM5MjM3NzQxLCJpc3MiOiJhcGktY2Uua3JvZ2VyLmNvbSIsInN1YiI6IjU0MjI4ZWRjLWQzYmEtNTBhMi04MGEyLWU4ODMzMjdkM2NmYSIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjM5MjM3NzQ2NzA5ODU2NDU0LCJhenAiOiJmaW5hbC1wcm9qZWN0LTY5MjFiM2FhYTQwM2ZhNDFmZjc3YTMxYjk5YzNhZjczNDk4NDYwMjk3NTY0NTc2NDIyMyJ9.sRE6aEgCUUkjI7VH3V-HdzzhQPxuDZV0fnq9_k0_vmNGQsu0t_0ZxeaeHj0O0fCXDeBH6rE-NxaVUrJ7MhULoIbB0KDUpghmfjdj-97czUfhMs19auSbx-Akzdj2X9_b4D2bmFZ58lCeRspZM1co32Xc690jSdAYp81rgINclLLj4lzZMUdUejc8q2uKaTcO8jdL6_6-ZcwbHvLCkyHOIPmsxB8TT8Gzc8v1YRCD2V5DIOMddb3rPvnzQtOM-waUhlzhy5_Lx3vXCYPSTaEVnLbAMZE6pO-BQcc-OUkPPuXzZWsfKyXzlAyIqadfCC-3qKq5wuh2sibnwtx4bJmpBA'
  
  curl -X POST \
  'https://api-ce.kroger.com/v1/connect/oauth2/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Authorization: Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg==' \
  -d 'grant_type=client_credentials&scope=product.compact'

  curl -X GET \
  'https://api-ce.kroger.com/v1/locations?filter.zipCode.near=46227' \
  -H 'Accept: application/json' \
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