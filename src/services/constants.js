const env = window.location.hostname === 'localhost' ? 'local' : 'prod';

const constants = {
  API_URI: 'www.google.com',
  NOTIFICATION_ENDPOINT: '/notifications',
  WEB_SOCKET_URI: 'ws://ec2-18-188-255-191.us-east-2.compute.amazonaws.com:8080/',
}

if (env === 'local') {
  constants.API_URI = 'http://localhost:3030';
}

export default constants;
