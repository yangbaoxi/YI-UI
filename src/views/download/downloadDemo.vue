<template>
    <div>
        <h1>测试下载组件</h1>
        <yi-download ref="aa" :src='src'></yi-download>
        <button @click="add()">下载</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            src: 'http://47.105.178.115/api/static/导入数据标准模板@20181217.xls',
            reqData: {
                attachId: "200012018122989502919",
                docId: "400022018122900000003",
                fileName: "400122018122900000005.jpg"
            }
        }
    },
    methods: {
        add() {
            this.$api.download(this.reqData).then((res) => {
                this.$refs.aa.streamDownload(res,'400122018122900000005.jpg');
            })
        }
    }
}
</script>

<style>

</style>
