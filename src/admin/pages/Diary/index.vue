<template>
    <el-row class="diary-page">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <transition name="bottomY" mode="out-in" appear>
                <el-tabs :tab-position="$store.state.common.isTop">
                    <el-tab-pane label="列表查看">
                        <list-diary></list-diary>
                    </el-tab-pane>
                    <el-tab-pane label="编辑日志">编辑日志</el-tab-pane>
                    <el-tab-pane label="添加日志">添加日志</el-tab-pane>
                </el-tabs>
            </transition>
        </el-col>
    </el-row>
</template>

<script>
import listDiary from '../components/listDiary'
export default {
    name: 'diaryAlbum',
    data() {
        return {
            
        }
    },
    created() {
        this.$store.state.admin_get.diary == null 
        ? this.$store.dispatch('admin_get/diary','').then(()=>{
        }).catch(()=>{})
        : ''
    },
    components:{
        listDiary
    }
}
</script>

<style lang="scss" scoped>
    .diary-page{
        padding-top: 30px;
    }
</style>