import { token } from 'morgan';
import * as adminAPI from './admin-api';

export async function login(credentials) {
    const token = await adminAPI.login(credentials);
  // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getUser();
}

export async function checkToken() {
    token = await adminAPI.checkToken()
    if (localStorage.token === token) {
        return true
    } else { 
        return false
    }
}

export function getToken() {
    const token = localStorage.getItem('token');
  // getItem will return null if no key
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not miliseconds
    if (payload.exp < Date.now() / 1000) {
        // Token has expired
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getAdmin() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
    localStorage.removeItem('token');
}