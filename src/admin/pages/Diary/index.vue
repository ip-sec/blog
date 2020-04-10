<template>
    <el-row class="diary-page">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <transition name="bottomY" mode="out-in" appear>
                <el-tabs :tab-position="$store.state.common.isTop" v-model="index" @tab-click="handleIndex">
                    <el-tab-pane label="列表查看">
                        <list-diary @listIndex="listIndex"></list-diary>
                    </el-tab-pane>
                    <el-tab-pane label="编辑日志">
                        <edit-diary></edit-diary>
                    </el-tab-pane>
                    <el-tab-pane label="添加日志">
                        <add-diary></add-diary>
                    </el-tab-pane>
                </el-tabs>
            </transition>
        </el-col>
    </el-row>
</template>

<script>
import listDiary from './listDiary'
import editDiary from './editDiary'
import addDiary from './addDiary'
export default {
    name: 'diaryAlbum',
    data() {
        return {
            index: '0'
        }
    },
    components:{
        listDiary,
        editDiary,
        addDiary
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
    .diary-page{
        padding-top: 30px;
    }
</style>