import YiSnowflak from "./snowflake/index.js";// 雪花组件
import YiParticle from "./particle/index.js";// 粒子背景组件

const components = [
    YiSnowflak,
    YiParticle
]

const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    YiSnowflak,
    YiParticle
}