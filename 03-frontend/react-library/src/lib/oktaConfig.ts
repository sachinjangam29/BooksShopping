export const oktaConfig = {
    clientId: '0oak4vy6qn7Wsa3tV5d7',
    issuer: 'https://dev-71183674.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
};