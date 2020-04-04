<template>
    <el-row class="admin-contain">
        <el-col :sm="24" :xs="24" :md="24" :lg="24">
            <el-image
            :src="img"
            fit="cover"></el-image>
        </el-col>
        <el-col :sm="24" :xs="24" :md="24" :lg="24">
            <h2>Welcome To My System</h2>
        </el-col>
        <el-col :sm="24" :xs="24" :md="24" :lg="24">
            <h3>This is my first blog</h3>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'adminHome',
    data() {
        return {
            img: require('@/assets/img/admin.gif')
        }
    },
}
</script>

<style lang="scss" scoped>
    .admin-contain{
        .el-col{
            @include flex-center();
            padding-bottom: 25px;
            h2,h3{
                text-align: center;
                font-family: "Trebuchet MS";
            }
        }
    }
</style>