<template>
    <el-row class="tutorial-page">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" v-if="$store.state.admin_get.tutorial">
            <transition name="bottomY" mode="out-in" appear>
                <el-tabs :tab-position="$store.state.common.isTop" :value="index">
                    <el-tab-pane label="列表查看">
                        <list-tutorial @listIndex="listIndex"></list-tutorial>
                    </el-tab-pane>
                    <el-tab-pane label="编辑教程">
                        <edit-tutorial></edit-tutorial>
                    </el-tab-pane>
                    <el-tab-pane label="添加教程">添加教程</el-tab-pane>
                </el-tabs>
            </transition>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" v-else v-loading="true"></el-col>
    </el-row>
</template>

<script>
import listTutorial from '../components/listTutorial'
import editTutorial from '../components/editTutorial'
export default {
    name: 'tutorialAlbum',
    data() {
        return {
            index: '0'
        }
    },
    created() {
        this.$store.state.admin_get.tutorial == null 
        ? this.$store.dispatch('admin_get/tutorial','').then(()=>{
        }).catch(()=>{})
        : ''
    },
    components:{
        listTutorial,
        editTutorial
    },
    methods:{
        listIndex(data){
            this.index = data
        }
    }
}
</script>

<style lang="scss" scoped>
    .tutorial-page{
        padding-top: 30px;
    }
</style>