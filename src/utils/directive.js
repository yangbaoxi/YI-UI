/**
 * 全局自定义指令
 */
import Vue from "vue";


// 示例代码：

const changeColor = Vue.directive('changeColor', {
    inserted(el, binding) {
        console.dir('Dom', el);
    }
})

export default {
    changeColor
}
