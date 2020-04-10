<template>
    <el-row class="message-contain">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <el-input v-model="filterDate" clearable style="width: 70%" placeholder="输入你想要搜索的信息"></el-input>
        </el-col>
        <el-col :sm="24" :xs="24" :md="24" :lg="24" v-if="$store.state.admin_get.message">
            <transition name="bottomY" mode="out-in" appear>
                <el-table :data="handleDate" style="width: 100%" max-height="500">
                    <el-table-column prop="id" label="ID" width="120"></el-table-column>
                    <el-table-column prop="datetime" label="日期" width="150"></el-table-column>
                    <el-table-column prop="avatar" label="头像URL" width="300"></el-table-column>
                    <el-table-column prop="message" label="信息" width="300"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button
                            @click.native.prevent="deleteRow(scope.$index,scope.row.id, $store.state.admin_get.message)"
                            type="text"
                            size="small">
                            移除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </transition>
        </el-col>
        <div v-else v-loading="true" style="paddingTop:200px"></div>
    </el-row>
    
</template>

<script>
export default {
    name: 'messageAlbum',
    data() {
        return {
            filterDate: ''
        }
    },
    created () {
        this.$store.dispatch('admin_get/message').then(() => {}).catch(() => {})
    },
    computed:{
        handleDate:function(){
            return this.$store.state.admin_get.message.filter((item)=>{
                return item.message.indexOf(this.filterDate) !== -1
            })
        }
    },
    methods:{
        deleteRow(index,id, rows) {
            rows.splice(index,1)
            this.$store.dispatch('admin_get/delMessage','/'+id).then(() => {
                this.$notify({
                    title: '成功',
                    message: '留言正在飞向回收站~',
                    type: 'success'
                });
            }).catch(() => {})
        }
    }
}
</script>

<style lang="scss" scoped>
    .message-contain{
        padding-top: 30px;
    }
</style>