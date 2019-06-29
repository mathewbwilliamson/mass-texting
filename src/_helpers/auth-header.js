import {getLocalStorageObject} from '../_services/userServices'

export function authHeader() {
    // return authorization header with basic auth credentials
    const localStorageObj = getLocalStorageObject()

    if (localStorageObj) {
        const user = JSON.parse(localStorageObj.getItem('user'));
        
        if (user && user.authdata) {
            return { 'Authorization': 'Basic ' + user.authdata };
        } else {
            return {};
        }
    }
}