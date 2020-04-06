<template>
    <div class="list-diary">
        <el-input v-model="filterDate" clearable style="width: 70%" placeholder="输入你想要搜索的标题"></el-input>
        <transition name="bottomY" mode="out-in" appear v-if="$store.state.admin_get.diary" tag="div">
            <el-table :data="handleDate" style="width: 100%" max-height="600">
                <el-table-column label="ID" width="100" prop="id"></el-table-column>
                <el-table-column label="日期" width="150" prop="datetime"></el-table-column>
                <el-table-column label="标题" width="180">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>简介： {{ scope.row.introduction }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag type="info" size="medium" effect="plain" >{{ scope.row.title }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="状态" width="100" prop="state"></el-table-column>
                <el-table-column label="查看数量" width="100" prop="view_num"></el-table-column>
                <el-table-column label="点赞数量" width="100" prop="like_num"></el-table-column>
                <el-table-column label="内容ID" width="100" prop="content_id"></el-table-column>
                <el-table-column label="操作"  width="150">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleList(scope)">查看</el-button>
                        <el-button size="mini" @click="handleDelete(scope)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </transition>
        <div v-else v-loading="true" style="paddingTop:200px"></div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            filterDate: '',
            diaryData: {},
        }
    },
    created() {
        this.$store.state.admin_get.diary == null 
        ? this.$store.dispatch('admin_get/diary','').then(()=>{
            this.$store.state.admin_get.diary.forEach((item)=>{
                item.state == 0 ? item.state='已发布' : item.state='待编辑'
            })
        }).catch(()=>{})
        : ''
    },
    computed:{
        handleDate:function(){
            return this.$store.state.admin_get.diary.filter((item)=>{
                return item.title.indexOf(this.filterDate) !== -1
            })
        }
    },
    methods:{
        handleList(data){
            for(let value in data.row){
                this.diaryData[value] = data.row[value]
            }
            this.$store.dispatch('common/listInfo',this.diaryData).then(()=>{
                this.diaryData = {}
                this.$emit('listIndex','1')
            }).catch(()=>{})
        },
        handleDelete(data){
            this.$store.dispatch('admin_get/delDiary','/'+data.row.id).then(()=>{
                this.$store.state.admin_get.diary.splice(data.$index,1);
            }).catch(()=>{})
        }
    }
}
</script>

<style lang="scss" scoped>
    .list-diary{
        .el-button+.el-button{
            margin-left: 0 !important;
        }
    }
</style>