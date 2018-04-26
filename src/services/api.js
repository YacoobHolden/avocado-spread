import 'isomorphic-fetch';
import openSocket from 'socket.io-client';
import Constants from './constants';

const socket = openSocket(Constants.WEB_SOCKET_URI);

export function getNotifications() {
  return fetch(`${Constants.API_URI}${Constants.NOTIFICATION_ENDPOINT}`).then(resp => resp.json());
}

export function subscribeToNotifications(cb, interval = 1000) {
  socket.on('notifications', data => cb(null, data));
  socket.emit('subscribeToNotifications', interval);
}
