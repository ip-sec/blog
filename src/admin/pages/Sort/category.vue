<template>
    <el-row class="category-page">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <el-input v-model="filterDate" clearable style="width: 70%" placeholder="输入你想要搜索的名称"></el-input>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" v-if="$store.state.admin_get.photo_class">
            <transition name="bottomY" tag="div" mode="out-in" appear>
                <el-table :data="handleDate" style="width: 100%" max-height="500">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left">
                                <el-form-item label="ID：">
                                    <el-input v-model="props.row.id" disabled></el-input>
                                </el-form-item>
                                <el-form-item label="名称：">
                                    <el-input v-model="props.row.name" :disabled="ifDisabled" clearable></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button :icon="icon" @click="handleData(icon,props)">修改</el-button>
                                    <el-button icon="el-icon-delete" @click="delData(props)">删除</el-button>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column label="ID" prop="id"></el-table-column>
                    <el-table-column label="名称" prop="name"></el-table-column>
                </el-table>
            </transition>
            <add-category></add-category>
        </el-col>
        <div v-else v-loading="true" style="paddingTop: 200px"></div>
    </el-row>
</template>

<script>
import addCategory from './addCategory'
export default {
    name: 'categoryAlbum',
    data() {
        return {
            icon: 'el-icon-edit',
            ifDisabled: true,
            filterDate: ''
        }
    },
    created(){
        this.$store.state.admin_get.photo_class == null 
        ? this.$store.dispatch('admin_get/photoCategory').then(()=>{}).catch(()=>{})
        : ''
    },
    components:{
        addCategory
    },
    computed:{
        handleDate:function(){
            return this.$store.state.admin_get.photo_class.filter((item)=>{
                return item.name.indexOf(this.filterDate) !== -1
            })
        }
    },
    methods:{
        handleData(icon,data){
            let _this = this
            if(icon ==  'el-icon-edit'){
                _this.icon = 'el-icon-check'
                _this.ifDisabled = false
            }else{
                if(data.row.name == ''){
                    this.$message({
                        type: 'error',
                        message: '确认好修改的信息喔',
                        center: true
                    })
                }else{
                    _this.rowData = {
                        id: data.row.id,
                        name: data.row.name
                    }
                    _this.$store.dispatch('admin_post/updateSort',_this.rowData).then(()=>{
                        this.$message({
                            type: 'success',
                            message: '操作成功啦~'
                        })
                    }).catch(()=>{})
                    _this.icon = 'el-icon-edit'
                    _this.ifDisabled = true
                }
            }
        },
        delData(data){
            this.$store.dispatch('admin_get/delCategory','/'+data.row.id).then(()=>{
                this.$store.state.admin_get.sort.splice(data.$index,1)
            }).catch(()=>{})
        }
    }
}
</script>

<style lang="scss">
    .category-page{
        .el-table__expanded-cell{
            padding: 20px 30px !important;
        }
    }
</style>