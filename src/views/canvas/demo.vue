<template>
    <div>
        <h1>测试获取canvas图片</h1>
        <img :src="`data:image/jpeg;base64,${imgsrc}`" alt="">

        <img ref="imgs" src="../../../public/2.jpg" alt="">


    </div>
</template>

<script>

export default {
    data() {
        return {
            imgsrc: ""
        }
    },
    methods: {
        stream(data){
            console.log('data', data);
            this.imgsrc = data.data;
        },
        getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
            var dataURL = canvas.toDataURL("image/" + ext);
            return dataURL;
        },
        base(img){
            let image = new Image();
            image.src = img;
            image.onload = () => {
                var base64 = this.getBase64Image(image);
                console.log(base64);
            }
        }
    },
    mounted(){
        let that = this;

        // console.log(this.$refs.imgs.src);
        this.base(this.$refs.imgs.src);

        // let Socket = new WebSocket('ws://192.168.43.30:3368');
        // console.log(Socket.readyState);
        // Socket.onopen = function(event) { //建立连接的回调函数
        //     console.log(event);
        //     console.log(Socket.readyState)
        // }

        // Socket.onmessage = function(evt){
        //     console.log('消息', evt);
        //     that.stream(evt);
        // }
    }
}
</script>

<style>

</style>
