import 'isomorphic-fetch';
import Constants from './constants';

export function getNotifications() {
  return fetch(`${Constants.API_URI}${Constants.NOTIFICATION_ENDPOINT}`).then(resp => resp.json());
}
