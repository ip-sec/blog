<template>
    <el-dialog title="日历" width="70%" :visible.sync="$store.state.common.dialogTableVisible">
        <el-calendar v-model="valueDate"></el-calendar>
    </el-dialog>
</template>

<script>
export default {
    data () {
        return {
            valueDate: new Date()
        }
    }
}
</script>

<style lang="scss">
    .el-dialog__wrapper{
        @include page-scroll;
    }
</style>