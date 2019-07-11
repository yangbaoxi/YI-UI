<template>
    <div>
        <yi-from :data="data" :model="from"></yi-from>
    </div>
</template>

<script>
export default {
    data () {
        return {
            data: [
                {
                    component: 'el-radio'

                }
            ],
            from: {
                radioValue: ""
            }
        }
    }
}
</script>

<style>

</style>
