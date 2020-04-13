<template>
    <div class="admin-home">
        <el-row>
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/systemTina' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="(u,i) in $route.meta.breadcrumb" :key="i" >{{ u }}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <transition name="bottomY" appear mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'adminLayout',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
    .admin-home{
        .el-col{
            padding-bottom: 20px;
        }
    }
</style>