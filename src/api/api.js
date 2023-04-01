import axios from "axios";
import React from "react";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "854e723b-7e94-46c8-a7e4-0502d655b3d9"
    }
})

export const usersAPI = {//api это объект


    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },

}
export const profileAPI = {

    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },


    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },

}

export const authAPI = {

    Login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    Logout(){
        return instance.delete('auth/login')
            .then(response => response.data)
    }
}