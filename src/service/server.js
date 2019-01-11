import $axios from "./service.util";

const download = data => {
    return $axios({
        baseURL: 'http://newslib2.xinhua.io/kbapi2/kbaseservice',
        url: '/attach/download',
        method: 'post',
        responseType: "arraybuffer",
        data
    })
}

export default {
    download
}