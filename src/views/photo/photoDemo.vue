<template>
    <div>
        <h1>图片弹框展示</h1>
        <button @click.stop="yes()">点击</button>
        <YiPhotoPreview ref="aa" titleName="图片预览" :imgData="imgData" ></YiPhotoPreview>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialogVisible: true,
            imgData: ['https://f12.baidu.com/it/u=62466529,3197984907&fm=72','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558072924278&di=bd86e4282ba8c24903948e370cf2df0a&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201504%2F07%2F20150407H4117_GKmFu.jpeg']
        }
    },
    methods: {
        yes(){
            this.$refs.aa.open(this.imgData);
        }
    }
}
</script>

<style>

</style>
