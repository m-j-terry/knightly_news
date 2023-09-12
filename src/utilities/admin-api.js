import sendRequest from './send-request';

const BASE_URL = '/api/admin';

export function login(credentials) {
	return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`, 'GET')
}

export function signUp(contributorData) {
	return sendRequest(`${BASE_URL}/contributor`, 'POST', contributorData);
}

export function submit(articleData) {
    return sendRequest(`${BASE_URL}/article`, 'POST', articleData)
}