const appMixins = {
    data () {
        return {
            mixinsName: '全局混入'
        }
    },
    mounted () {
        console.log('全局混入');
    }
}

export default appMixins