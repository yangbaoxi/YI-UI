import $axios from "./service.util";

const getUsers = data => {
    return $axios({
        baseURL: 'http://192.168.1.101:3000',
        url: '/users/signIn',
        method: 'post',
        data
    })
}

export default {
    getUsers
}