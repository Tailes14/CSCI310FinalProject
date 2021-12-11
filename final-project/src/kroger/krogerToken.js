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
  -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLWNlLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoidnl6bG52Y3dSUUZyRzZkWDBzU1pEQT09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJmaW5hbC1wcm9qZWN0LTY5MjFiM2FhYTQwM2ZhNDFmZjc3YTMxYjk5YzNhZjczNDk4NDYwMjk3NTY0NTc2NDIyMyIsImV4cCI6MTYzOTE4NTQ0NCwiaWF0IjoxNjM5MTgzNjM5LCJpc3MiOiJhcGktY2Uua3JvZ2VyLmNvbSIsInN1YiI6IjU0MjI4ZWRjLWQzYmEtNTBhMi04MGEyLWU4ODMzMjdkM2NmYSIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjM5MTgzNjQ0NjkzOTI3Njk3LCJhenAiOiJmaW5hbC1wcm9qZWN0LTY5MjFiM2FhYTQwM2ZhNDFmZjc3YTMxYjk5YzNhZjczNDk4NDYwMjk3NTY0NTc2NDIyMyJ9.ka9fl8WnoZbcntAndNRRpnIPTeVWXxDB4MST4iFGXZV6OdS9znK9hKRg53kfUr1iggdbBJ44L_GSHVUZLaOxruJWdGytedVWy9gdghki4QpyH-PE487OGJexcs8WNA9cZa10-hngXidd6R33So9qjweMwVyHg5Uqjf1HTGN2Sg58ezTnYgq9XhE8KTPmHU9dPP3yBndD_2TKGmfgQcDIUL0wE1rAHoJ-avSFmcYmS2Wf9F7zkx1IbkoeX2lOEASkBsD18S-8vtwf3BsFUziJ1QUBnrM5I_EIs-YlA0L67IRct9CCXmRftMxTt7sPMVzSNY_3-5kaCFPoLwxIXkofHQ'

  curl -X POST \
  'https://api-ce.kroger.com/v1/connect/oauth2/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Authorization: Basic ZmluYWwtcHJvamVjdC02OTIxYjNhYWE0MDNmYTQxZmY3N2EzMWI5OWMzYWY3MzQ5ODQ2MDI5NzU2NDU3NjQyMjM6OEk3bzZyN0gtQVNhd21KempDS0dkUW05N05CZzd2RzlxRC1pUURyMg==' \
  -d 'grant_type=client_credentials&scope=product.compact'
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