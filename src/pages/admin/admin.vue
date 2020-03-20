<template>
    <el-container class="admin-container" :style="{width: pageWidth, height: pageHeight}">
        <el-aside width="200px" class="hidden-sm-and-down">
            <!-- Aside content -->
        </el-aside>
        <el-container>
            <el-header height="70px">
                <!-- Header content -->
            </el-header>
            <el-main height="100%">
                <!-- Main content -->
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import getPageSize from '@/assets/js/mixins/getPageSize'
export default {
    name: 'admin',
    data () {
        return {
            
        }
    },
    mixins: [getPageSize],
    methods: {

    }
}
</script>

<style lang="scss">
    .admin-container {
        .el-aside{
            background: burlywood;
        }
        .el-header{
            background: lightcyan;
        }
        .el-main{
            background: lightpink;
        }
    } 
</style>