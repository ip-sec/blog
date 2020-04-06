<template>
    <div class="push-page">
        <el-button icon="el-icon-plus" @click="addCategory">添加</el-button>
        <el-dialog title="新增类别" :visible.sync="categoryDialog" width="60%">
            <el-form label-position="left" :rules="rules" ref="ruleAddForm" :model="addData" @submit.native.prevent="commitCategory">
                <el-form-item label="名称："  prop="name">
                    <el-input v-model="addData.name" clearable ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :icon="pushIcon" @click="commitCategory">添加</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categoryDialog: false,
            addData:{
                name: '',
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
        addCategory(){
            this.categoryDialog = true
        },
        commitCategory(){
            let _this = this
            _this.$refs.ruleAddForm.validate((valid) => {
                if (valid) {
                    _this.pushIcon = 'el-icon-loading'
                    _this.$store.dispatch('admin_post/saveCategory',_this.addData).then(()=>{
                        _this.$store.state.admin_get.photo_class.push({
                            id:   _this.$store.state.admin_get.photo_class[_this.$store.state.admin_get.photo_class.length-1].id+1,
                            name: _this.addData.name,
                        })
                        _this.addData.name = ''
                        _this.pushIcon = 'el-icon-plus'
                        _this.categoryDialog = false
                    }).catch(()=>{})
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .push-page{
        padding-top: 30px;
    }
</style>