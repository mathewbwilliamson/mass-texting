import {endpoint} from '../../config';
import { authHeader } from '../_helpers/auth-header';

export const userService = {
    login,
    logout,
    getAll,
    isLoggedIn
}

export const getLocalStorageObject = () => {
    if (typeof window !== 'undefined' && window && window.localStorage) {
        return window.localStorage
    } else {
        return null
    }
}

export const isLoggedIn = () => {
    const user = getUserData()
        ? JSON.parse(window.localStorage.user)
        : {}
    
    return !!user.token
}

export const getUserData = () => {
    const localStorageObj = getLocalStorageObject()

    if (localStorageObj) {
        const user = JSON.parse(localStorageObj.getItem('user'));
        return user
    } else {
        return null
    }
}

export const login = (username, password) => {
    const localStorageObj = getLocalStorageObject()
    if (!localStorageObj || typeof window === 'undefined' || !window) return null

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${endpoint}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorageObj.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

export const logout = () => {
    // remove user from local storage to log user out
    const localStorageObj = getLocalStorageObject()
    if (localStorageObj) {
        localStorageObj.removeItem('user');
    }
}

export const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${endpoint}/users`, requestOptions).then(handleResponse);
}

export const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}