const env = window.location.hostname === 'localhost' ? 'local' : 'prod';

const constants = {
  API_URI: 'www.google.com',
  NOTIFICATION_ENDPOINT: '/notifications',
}

if (env === 'local') {
  constants.API_URI = 'http://localhost:3030';
}

export default constants;
