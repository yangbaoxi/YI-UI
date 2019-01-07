/**
 * 全局管道过滤器
 */
import Vue from "vue";


// 示例代码：

const dateTime = Vue.filter('dateTime', (value) => {
    return value + 11;
})

export default {
    dateTime
}
