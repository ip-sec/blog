<template>
    <div class="push-page">
        <el-button icon="el-icon-plus" @click="addSort">添加</el-button>
        <el-dialog title="新增标签" :visible.sync="sortDialog" width="60%">
            <el-form label-position="left" :rules="rules" ref="ruleAddForm" :model="addDate" @submit.native.prevent="commitSort">
                <el-form-item label="名称："  prop="name">
                    <el-input v-model="addDate.name" clearable ></el-input>
                </el-form-item>
                <el-form-item label="背景颜色：">
                    <el-color-picker v-model="addDate.bg" show-alpha></el-color-picker>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-refresh-right" @click="resetData">重置</el-button>
                    <el-button :icon="pushIcon" @click="commitSort">添加</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            sortDialog: false,
            addDate:{
                name: '',
                bg: '',
            },
            rules: {
                name: [
                    { required: true, message: '输入名称信息( •̀ ω •́ )', trigger: 'blur' }
                ]
            },
            pushIcon: 'el-icon-plus'
        }
    },
    methods: {
        addSort(){
            this.sortDialog = true
        },
        commitSort(){
            let _this = this
            if(_this.addDate.bg != ''){
                _this.$refs.ruleAddForm.validate((valid) => {
                    if (valid) {
                        _this.pushIcon = 'el-icon-loading'
                        _this.$store.dispatch('admin_post/saveSort',_this.addDate).then(()=>{
                            _this.$store.state.admin_get.sort.push({
                                id:  _this.$store.state.admin_get.sort[_this.$store.state.admin_get.sort.length-1].id+1,
                                name: _this.addDate.name,
                                bg: _this.addDate.bg,
                                })
                            _this.addDate.name = _this.addDate.bg = ''
                            _this.pushIcon = 'el-icon-plus'
                            _this.sortDialog = false
                        }).catch(()=>{})
                    }
                })
            }else{
                _this.$message({
                    type: 'error',
                    message: '请选择颜色信息( •̀ ω •́ )',
                    center: true
                })
            }
        },
        resetData(){
            this.addDate.name = this.addDate.bg =  ''
        }   
    },
}
</script>

<style lang="scss" scoped>
    .push-page{
        padding-top: 30px;
        .el-button+.el-button{
            margin-left: 0 !important;
        }
    }
</style>