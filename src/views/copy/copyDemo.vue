<template>
    <div>
        <h1>测试复制组件demo</h1>

        <yi-copy v-model="aaa" ref="aaa" @copySuccess="copySuccess">
            <span slot="ButtonName">打印</span>
        </yi-copy>

        <button @click="add()">外部按钮打印</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            aaa: '好多数据~~~~~~~~~~~~~'
        }
    },
    methods: {
        add(){
            this.$refs.aaa.copy();
        },
        copySuccess(data){
            console.log('打印成功回调函数',data);
        }
    }
}
</script>

<style>

</style>
