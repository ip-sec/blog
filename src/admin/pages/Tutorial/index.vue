<template>
    <el-row class="tutorial-page">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <transition name="bottomY" mode="out-in" appear>
                <el-tabs :tab-position="$store.state.common.isTop" v-model="index" @tab-click="handleIndex">
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
    </el-row>
</template>

<script>
import listTutorial from './listTutorial'
import editTutorial from './editTutorial'
export default {
    name: 'tutorialAlbum',
    data() {
        return {
            index: '0'
        }
    },
    components:{
        listTutorial,
        editTutorial
    },
    methods:{
        listIndex(data){
            this.index = data
        },
        handleIndex(tab){
            this.index = tab.index
        }
    }
}
</script>

<style lang="scss" scoped>
    .tutorial-page{
        padding-top: 30px;
    }
</style>