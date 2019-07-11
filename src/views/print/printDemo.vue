<template>
    <div>
        <h1 id="title">测试打印 Demo </h1>

        <yi-print ref="aa"  :title="'测试i打印'" :icon="'el-icon-search'">
            <div>
                1213d
            </div>

            <!-- <button slot="ButtonName"><span>打印</span></button> -->
        </yi-print>
        <!-- <button @click="dda()">打印</button> -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            html: '<h2>在吗</h2>'
        }
    },
    methods: {
        dda(){
            this.$refs.aa.print();
        }
    },
    mounted(){
        let title = document.getElementById('title');
        console.log(typeof title)
    }
}
</script>

<style>
    .print-css {
        border: 1px solid red;
    }
    .print-css li {
        text-align: center;
        color: aquamarine;

    }
</style>


<style>
    @media print {
        *{
            margin: 0;
            padding: 0;
            font-family: '宋体';
            color: red;
        }
        .ul-a {
            border: 1px solid blue;
        }
        h1 {
            font-size: 24px;
            color: aquamarine;
        }
    }
</style>
