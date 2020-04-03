<template>
    <div class="admin-home">
        <el-row class="tab-contain">
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
                <el-tabs :tab-position="$store.state.common.isTop" style="height: 200px;">
                    <el-tab-pane label="日志修改">用户管理</el-tab-pane>
                    <el-tab-pane label="日志添加">配置管理</el-tab-pane>
                    <el-tab-pane label="日志删除">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'adminHome',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
    .tab-contain{
        padding-top: 30px;
    }
</style>