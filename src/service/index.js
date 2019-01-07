import server from "./server";// 主 server

// 引入 模块server (请严格按照功能模块划分server服务)

// 合并所有serverApi
const serverApi = { ...server };

const install = Vue => {
    if (install.installed) {
        return
    };
    install.installed = true;

    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return serverApi
            }
        }
    })
}

export default install;