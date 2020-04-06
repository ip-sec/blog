<template>
    <div class="list-tutorial">
        <transition name="bottomY" mode="out-in" appear v-if="$store.state.admin_get.tutorial" tag="div">
            <el-table :data="$store.state.admin_get.tutorial" style="width: 100%" max-height="600">
                <el-table-column label="ID" width="100" prop="id"></el-table-column>
                <el-table-column label="日期" width="150" prop="datetime"></el-table-column>
                <el-table-column label="标题" width="180">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>简介: {{ scope.row.introduction }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag type="info" size="medium" effect="plain" >{{ scope.row.title }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="URL" width="300">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <el-image :src="scope.row.url" fit="cover" style="width:200px" ></el-image>
                            <div slot="reference" class="name-wrapper">
                                <el-tag type="info" size="medium" effect="plain" >{{ scope.row.url }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
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
        <div v-else v-loading="true" style="paddingTop:100px"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tutorialData: {},
        }
    },
    methods:{
        handleList(data){
            for(let value in data.row){
                this.tutorialData[value] = data.row[value]
            }
            this.$store.dispatch('common/listInfo',this.tutorialData).then(()=>{
                this.tutorialData = {}
                this.$emit('listIndex','1')
            }).catch(()=>{})
        },
        handleDelete(data){

        }
    }
}
</script>

<style lang="scss" scoped>
    .list-tutorial{
        .el-button+.el-button{
            margin-left: 0 !important;
        }
    }
</style>