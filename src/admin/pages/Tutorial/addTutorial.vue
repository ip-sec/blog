<template>
    <div class="add-tutorial">
        <transition name="bottomY" mode="out-in" appear v-if="addData">
            <el-form label-position="left" ref="ruleAddTutorial" :rules="rules" :model="addData" @submit.native.prevent="saveData(0,'已发布')">
                <el-form-item label="标题：" prop="title">
                    <el-input v-model="addData.title"  maxlength="20" show-word-limit clearable></el-input>
                </el-form-item>
                <el-form-item label="简介：" prop="introduction">
                    <el-input v-model="addData.introduction" type="textarea" maxlength="50" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="教程标签：" prop="sort_id">
                    <el-select v-model="addData.sort_id" placeholder="请选择">
                        <el-option v-for="item in $store.state.admin_get.sort"
                        :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="背景图：">
                    <el-image :src="addData.url" fit="cover">
                        <div slot="error" class="image-slot">
                            <img src="../../../assets/img/loading.gif" style="width:300px">
                        </div>
                    </el-image>
                </el-form-item>
                <el-form-item>
                    <el-upload action="http://localhost:80/admin/upload" ref="refUpload" list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess">
                        <i class="el-icon-upload"></i>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        <div slot="tip">
                            <label>上传图片路径：</label>
                            <el-input v-model="uploadImg" clearable ></el-input>
                        </div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item label="内容：" class="markdown_style" prop="markdown">
                    <mavon-editor v-model="addData.markdown" @change="change"/>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-edit" @click="saveData(0,'已发布')">添加</el-button>
                    <el-button icon="el-icon-document-checked" @click="saveData(1,'待编辑')">保存</el-button>
                </el-form-item>
            </el-form>
        </transition>
        <div v-else v-loading="true"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            select_id: '',
            uploadImg: '',
            bgImg: true,
            dialogVisible: false,
            dialogImageUrl: '',
            addData: {
                title: '',
                introduction: '',
                url:'',
                sort_id: '',
                datetime: new Date().getTime(),
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
                sort_id:[
                    { required: true, message: '选择标签信息( •̀ ω •́ )', trigger: 'blur' }
                ],
                markdown:[
                    { required: true, message: '输入内容信息( •̀ ω •́ )', trigger: 'blur' }
                ]
            },
        }
    },
    created(){
        this.$store.state.admin_get.sort == null 
        ? this.$store.dispatch('admin_get/sort').then(()=>{
        }).catch(()=>{})
        : ''
    },
    methods:{
        change(value, render){
            this.addData.html = render;
        },
        saveData(state,stateName){
            let _this = this
            _this.$refs.ruleAddTutorial.validate((valid) => {
                if (valid) {
                    _this.addData['state'] = state
                    _this.$store.dispatch('admin_post/saveTutorial',_this.addData).then(()=>{
                        let data = _this.$store.state.admin_get.tutorial
                        data.push({
                            id: data[data.length-1] ? data[data.length-1].id+1 : 1,
                            title: _this.addData.title,
                            introduction: _this.addData.introduction,
                            url: _this.addData.url,
                            sort_id:  _this.addData.sort_id,
                            datetime: new Date(_this.addData.datetime).toLocaleDateString(),
                            state: stateName,
                            view_num: 0,
                            like_num: 0,
                            markdown: _this.addData.markdown,
                        })
                        _this.$refs.ruleAddTutorial.resetFields()
                    }).catch(()=>{
                        
                    })
                }else{
                    return
                }
            })
        },
        handleSuccess(file) {
            let _this = this
            _this.uploadImg = location.protocol + "//" + location.hostname+":80/"+file.data.replace(/\\/g,"/")
            if(_this.bgImg){
                _this.addData.url = _this.uploadImg
                _this.bgImg = false
            }
        },
        handleRemove(file) {
            if(file.response == undefined){
                return
            }else{
                let data = {
                    url: file.response.data
                }
                this.$store.dispatch('admin_post/delPhotoFile',data).then(()=>{
                    this.uploadImg = ''
                }).catch(()=>{})
            }
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
    }
}
</script>

<style lang="scss"> 
    .add-tutorial{
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