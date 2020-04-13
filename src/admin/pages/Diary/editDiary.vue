<template>
    <div class="edit-diary">
        <transition name="bottomY" mode="out-in" appear>
            <el-form label-position="left" ref="ruleEditDiary" :rules="rules" :model="editData" @submit.native.prevent="updateData(0,'已发布')">
                <el-form-item label="ID：">
                    <el-select v-model="select_id" placeholder="请选择" @change="siteData()">
                        <el-option v-for="item in $store.state.admin_get.diary"
                        :key="item.id" :label="item.id" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="标题：" prop="title">
                    <el-input v-model="editData.title"  maxlength="20" show-word-limit clearable></el-input>
                </el-form-item>
                <el-form-item label="简介：" prop="introduction">
                    <el-input v-model="editData.introduction" type="textarea" maxlength="50" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="内容：" class="markdown_style" prop="markdown">
                    <mavon-editor v-model="editData.markdown" @change="change"/>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-edit" @click="updateData(0,'已发布')">修改</el-button>
                    <el-button icon="el-icon-document-checked" @click="updateData(1,'待编辑')">保存</el-button>
                </el-form-item>
            </el-form>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            select_id: '',
            editData: {
                id: '',
                title: '',
                introduction: '',
                datetime: '',
                content_id: '',
                markdown: '',
                html: ''
            },
            rules:{
                title:[
                    { required: true, message: '输入标题信息( •̀ ω •́ )', trigger: 'blur' }
                ],
                introduction:[
                    { required: true, message: '输入简介信息( •̀ ω •́ )', trigger: 'blur' }
                ],
                markdown:[
                    { required: true, message: '输入内容信息( •̀ ω •́ )', trigger: 'blur' }
                ]
            },
        }
    },
    created(){
        let _this = this
        if(_this.$store.state.common.listData !== null){
            _this.editData = _this.$store.state.common.listData
            _this.select_id = _this.$store.state.common.listData.id
        }
    },
    watch:{
        '$store.state.common.listData':function(to,from){
            this.editData = to
            this.select_id = to.id
        }
    },
    methods:{
        change(value, render){
            this.editData.html = render;
        },
        siteData(){
            this.$store.dispatch('common/listData',this.$store.state.admin_get.diary[this.select_id-1]).then(()=>{
            }).catch(()=>{})
        },
        updateData(state,stateName){
            let _this = this
            _this.$refs.ruleEditDiary.validate((valid) => {
                if (valid) {
                    _this.editData['state'] = state
                    _this.editData['datetime'] = new Date().getTime()
                    _this.$store.dispatch('admin_post/updateDiary',_this.editData).then(()=>{
                        _this.editData['state'] = stateName
                        _this.editData['datetime'] = new Date(_this.editData['datetime']).toLocaleDateString()
                        _this.$message({
                            type: 'success',
                            message: '操作成功啦~',
                            center: true
                        })
                    }).catch(()=>{
                        
                    })
                }else{
                    return
                }
            })
        }
    }
}
</script>

<style lang="scss"> 
    .edit-diary{
        .el-form{
            .markdown_style{
                .el-form-item__label{
                    float: none;
                }
                .el-form-item__content{
                    padding: 5px;
                }
            }
        }
    }
</style>