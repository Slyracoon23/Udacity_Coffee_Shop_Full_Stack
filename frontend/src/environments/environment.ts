/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'https://coffee-udacity.herokuapp.com', // the running FLASK api server url
  auth0: {
    url: 'dev-1b1k1ixz.us', // the auth0 domain prefix
    audience: 'coffee', // the audience set for the auth0 app
    clientId: '2uQb9MLY0RYc5bYE9Nljdpvk2AC7R9YC', // the client id generated for the auth0 app
    callbackURL: 'https://coffee-udacity.herokuapp.com', // the base url of the running ionic application.
  }
};
