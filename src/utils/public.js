/**
 * 公共函数
 */
import { Message } from "element-ui"  // 弹框组件
/**
 * 获取当前时间
 * @param {Date} date 时间对象
 * @param {String} fmt 返回时间的格式 'yyyy-MM-dd hh:mm:ss'
 * @returns {String} 返回 当前日期
 */
const FormatDate = (date, fmt) => {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    function padLeftZero(str) {
        return ('00' + str).substr(str.length);
    }
    return fmt;
}
/**
 * localstorage 封装
 * @returns {Object} 返回 三个函数
 */
const Localstorage = () => {
    let storage = window.localStorage;
    if (!window.localStorage) {
        Message({
            message: "浏览器不支持localstorage",
            type: "warning"
        })
        return false;
    }
    // 存储
    let set = (key, value) => {
        storage.setItem(key, JSON.stringify(value));
    }
    // 读取
    let get = (key) => {
        let getData = storage.getItem(key);
        getData = JSON.parse(getData);
        return getData;
    }
    // 删除
    let clear = (key) => {
        storage.removeItem(key);
    }
    return {
        set: set,
        get: get,
        clear: clear
    }
}
/**
 * sessionstorage 封装
 * @returns {Object} 返回 三个函数
 */
const Sessionstorage = () => {
    let storage = window.sessionStorage;
    if (!window.sessionStorage) {
        Message({
            message: "浏览器不支持sesssionstorage",
            type: "warning"
        })
        return false;
    }
    // 存储
    let set = (key, value) => {
        storage.setItem(key, JSON.stringify(value));
    }
    // 读取
    let get = (key) => {
        let getData = storage.getItem(key);
        getData = JSON.parse(getData);
        return getData;
    }
    // 删除
    let clear = (key) => {
        storage.removeItem(key);
    }
    return {
        set: set,
        get: get,
        clear: clear
    }
}
/**
 * 获取 cookie 数据
 * @param {String} name 获取 cookie 的 name
 * @returns {String} 返回 cookie 数据
 */
const GetCookie = (name) => {
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return null;
}
/**
 * 存入 cookie 数据
 * @param {String} name 存储 cookie 的 name
 * @param {String} value 存储 cookie 的 值
 * @returns {Any} 返回 true
 */
const SetCookie = (name, value) => {
    let Days = 1;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
    return true;
}
/**
 * 字节换算
 * @param {Number} limit 文件的字节数
 * @returns {String} 返回 文件大小值
 */
const ByteConversion = (limit) => {
    let size = "";
    if (limit < 0.1 * 1024) { //如果小于0.1KB转化成B
        size = limit.toFixed(2) + "B";
    } else if (limit < 0.1 * 1024 * 1024) { //如果小于0.1MB转化成KB
        size = (limit / 1024).toFixed(2) + "KB";
    } else if (limit < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + "MB";
    } else { //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
    let sizestr = size + "";
    let len = sizestr.indexOf("\.");
    let dec = sizestr.substr(len + 1, 2);
    if (dec == "00") { //当小数点后为00时 去掉小数部分
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
    }
    return sizestr;
}
/**
 * 关闭窗口
 * @param {Function} callback 关闭前回调
 * @param {Number} time 关闭延迟时间
 * @returns {void}
 */
const CloseWindow = (callback, time = 200) => {
    setTimeout(() => {
        callback && callback();
        window.close();
    }, time);
}
/**
 * 数据类型判断
 * @param {Any} data 判断数据的类型
 * @returns {String} type 返回当前数据类型
 */
const GetDataType = data => {
    return Object.prototype.toString.call(data);
}

/**
 * 简单的克隆方法
 * @param {Array|Object} data 要克隆的数据
 * @param {boolean} isDeep 是否要深度克隆
 * @returns {Array|Object} newData 返回克隆后的数据
 */
const CloneSimpleData = (data, isDeep = false) => {
    let newData = ''
    if (!isDeep) {
        if (getDataType(data) === '[object Object]') {
            newData = Object.assign({}, data);
        } else if (getDataType(data) === '[object Array]') {
            newData = data.concat()
        }
    } else {
        newData = JSON.parse(JSON.stringify(data))
    }
    return newData;
}

export default {
    FormatDate,
    Localstorage,
    Sessionstorage,
    GetCookie,
    SetCookie,
    ByteConversion,
    CloseWindow,
    GetDataType,
    CloneSimpleData
}