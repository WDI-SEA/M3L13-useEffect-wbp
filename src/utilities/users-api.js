import sendRequest from './send-request';
const BASE_URL = 'https://randomuser.me/api/?results=10';

export function getUsers() {
	return sendRequest(BASE_URL);
}
