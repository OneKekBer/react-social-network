import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "854e723b-7e94-46c8-a7e4-0502d655b3d9"
    }
})

export const getUsers = (currentPage, pageSize)=>{
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const getProfile = (id) =>{
    return instance.get(`profile/${id}`)
        .then(response => response.data)
}

export const authMe = () =>{
    return instance.get('auth/me')
        .then(response => response.data)
}

export const unFollow = (id)=>{
    return instance.delete(`follow/${id}`)
        .then(response => response.data)


}

export const follow = (id)=>{
    return instance.post(`follow/${id}`, {} )
        .then(response => response.data)
}
