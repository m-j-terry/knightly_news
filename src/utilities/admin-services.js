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
    console.log(token)
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
    return token ? JSON.parse(atob(token.split('.')[1])).contributor : null;
}

export function logOut() {
    localStorage.removeItem('token');
}

export async function createContributor(contributorData) {
    const contributor = await adminAPI.signUp(contributorData);
    return contributor
}

// export async function submitArticle(articleData) {
//     console.log(articleData)
//     const token = await adminAPI.submit(articleData)
//     return getAdmin()
// }