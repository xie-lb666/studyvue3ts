import Cookies from 'js-cookie';
import {
    LOGIN_TOKEN,
    USERINFO
} from "./storage";

export function getToken() {
    return Cookies.get(LOGIN_TOKEN);
}
export function setToken(token: any, rememberMe: any) {
    if (rememberMe) {
        return Cookies.set(LOGIN_TOKEN, token, {
            expires: 1
        })
    } else return Cookies.set(LOGIN_TOKEN, token)
}
export function removeToken() {
    return Cookies.remove(LOGIN_TOKEN);
}

export function getUserInfo() {
    const cookieStr = Cookies.get(USERINFO)||'';
    return cookieStr ? JSON.parse(cookieStr) : null;
}


export function setUserInfo(userInfo: any) {
    userInfo = JSON.stringify(userInfo);
    return Cookies.set(USERINFO, userInfo || "", {
        expires: 1
    })
}


export function removeUserInfo() {
    return Cookies.remove(USERINFO);
}



export function clear() {
    Cookies.remove(LOGIN_TOKEN);
    Cookies.remove(USERINFO);
}
