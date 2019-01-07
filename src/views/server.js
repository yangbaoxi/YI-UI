import $axios from "../service/service.util";

const getUsers = data => {
    return $axios({
        baseURL: 'http://192.168.1.101',
        url: '/users/signIn',
        method: 'post',
        data
    })
}

export default {
    getUsers
}