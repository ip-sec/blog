<template>
    <el-row class="sort-page">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <el-input v-model="filterDate" clearable style="width: 70%" placeholder="输入你想要搜索的名称"></el-input>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" class="tab-sort" v-if="$store.state.admin_get.sort" >
            <transition name="bottomY" mode="out-in" appear>
                <el-table :data="handleDate" style="width: 100%" max-height="500">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left">
                                <el-form-item label="ID：">
                                    <el-input v-model="props.row.id" disabled></el-input>
                                </el-form-item>
                                <el-form-item label="名称：">
                                    <el-input v-model="props.row.name" :disabled="isDisabled" clearable></el-input>
                                </el-form-item>
                                <el-form-item label="背景颜色：">
                                    <el-color-picker v-model="props.row.bg" show-alpha :disabled="isDisabled"></el-color-picker>
                                </el-form-item>
                                <el-form-item>
                                    <el-button :icon="editIcon" @click="handleRowData(editIcon,props)">修改</el-button>
                                    <el-button icon="el-icon-delete" @click="delRow(props)">删除</el-button>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column label="ID" prop="id"></el-table-column>
                    <el-table-column label="名称" prop="name"></el-table-column>
                    <el-table-column label="背景颜色" prop="bg"></el-table-column>
                </el-table>
            </transition>
            <add-sort></add-sort>
        </el-col>
        <div v-else v-loading="true" style="paddingTop:200px"></div>
    </el-row>
</template>

<script>
import addSort from './addSort'
export default {
    name: 'sortAlbum',
    data() {
        return {
            editIcon: 'el-icon-edit',
            isDisabled: true,
            rowData: null,
            filterDate: ''
        }
    },
    created() {
        this.$store.state.admin_get.sort == null 
        ? this.$store.dispatch('admin_get/sort').then(()=>{
        }).catch(()=>{})
        : ''
    },
    computed:{
        handleDate:function(){
            return this.$store.state.admin_get.sort.filter((item)=>{
                return item.name.indexOf(this.filterDate) !== -1
            })
        }
    },
    components:{
        addSort
    },
    methods:{
        handleRowData(icon,data){
            let _this = this
            if(icon ==  'el-icon-edit'){
                _this.editIcon = 'el-icon-check'
                _this.isDisabled = false
            }else{
                if(data.row.name == '' || data.row.bg == ''){
                    this.$message({
                        type: 'error',
                        message: '确认好修改的信息喔',
                        center: true
                    })
                }else{
                    _this.rowData = {
                        id: '/'+ data.row.id,
                        name: data.row.name,
                        bg: data.row.bg
                    }
                    _this.$store.dispatch('admin_post/updateSort',_this.rowData).then(()=>{
                        this.$message({
                            type: 'success',
                            message: '操作成功啦~'
                        })
                    }).catch(()=>{})
                    _this.editIcon = 'el-icon-edit'
                    _this.isDisabled = true
                }
            }
        },
        delRow(data){
            this.$store.dispatch('admin_get/delSort','/'+data.row.id).then(()=>{
                this.$store.state.admin_get.sort.splice(data.$index,1)
            }).catch(()=>{})
        }
    }
}
</script>

<style lang="scss" scoped>
    .sort-page{
        .tab-sort{
            .el-button+.el-button{
                margin-left: 0 !important;
            }
        }
    }
</style>