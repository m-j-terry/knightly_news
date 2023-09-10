import sendRequest from './send-request';

const BASE_URL = '/api/admin';

export function login(credentials) {
	return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`, 'GET')
}