import 'isomorphic-fetch';
import Sockette from 'sockette';
import Constants from './constants';

export function getNotifications() {
  return fetch(`${Constants.API_URI}${Constants.NOTIFICATION_ENDPOINT}`).then(resp => resp.json());
}

export function subscribeToNotifications(onMessageRecieved) {
  const ws = new Sockette(Constants.WEB_SOCKET_URI, {
    timeout: 5e3,
    maxAttempts: 10,
    onopen: e => console.log('Connected!', e),
    onmessage: onMessageRecieved,
    onreconnect: e => console.log('Reconnecting...', e),
    onmaximum: e => console.log('Stop Attempting!', e),
    onclose: e => console.log('Closed!', e),
    onerror: e => console.log('Error:', e)
  });
  return ws;
}
