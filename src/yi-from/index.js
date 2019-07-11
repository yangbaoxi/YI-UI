import YiFrom from "./from/index.js";

const components = [
    YiFrom
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
    YiFrom
}