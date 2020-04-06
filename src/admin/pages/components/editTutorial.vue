<template>
    <div class="edit-tutorial">
        <transition name="bottomY" mode="out-in" appear v-if="editData">
            <el-form label-position="left" ref="ruleEditForm" :rules="rules" :model="editData" @submit.native.prevent="commitSort">
                <el-form-item label="ID：">
                    <el-select v-model="id" placeholder="请选择" @change="siteData()">
                        <el-option v-for="item in $store.state.admin_get.tutorial"
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
                <el-form-item label="教程标签：" prop="sort_id">
                    <el-select v-model="editData.sort_id" placeholder="请选择">
                        <el-option v-for="item in $store.state.admin_get.sort"
                        :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="背景图：">
                    <el-image :src="editData.url" fit="cover">
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
                <el-form-item label="内容：" prop="content">
                    <el-input v-model="editData.content" type="textarea" autosize ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-refresh-right" @click="resetData(editData)">重置</el-button>
                    <el-button :icon="pushIcon" @click="updateData">修改</el-button>
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
            id: '',
            uploadImg: '',
            bgImg: true,
            dialogVisible: false,
            dialogImageUrl: '',
            pushIcon: 'el-icon-edit',
            editData: {
                title: '',
                introduction: '',
                url:'',
                sort_id: '',
                datetime: new Date().getTime(),
                content: '',
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
                content:[
                    { required: true, message: '输入内容信息( •̀ ω •́ )', trigger: 'blur' }
                ]
            }
        }
    },
    created(){
        this.$store.state.admin_get.sort == null 
        ? this.$store.dispatch('admin_get/sort').then(()=>{
        }).catch(()=>{})
        : ''
    },
    watch:{
        '$store.state.common.listInfo':function(to,from){
            this.editData = to
            this.id = to.id
            this.bgImg = true
        }
    },
    methods:{
        siteData(){
            this.$store.dispatch('common/listInfo',this.$store.state.admin_get.tutorial[this.id-1]).then(()=>{
            }).catch(()=>{})
        },
        resetData(data){
            for(let value in data){
                data[value] = ''
            }
        },
        updateData(){

        },
        handleSuccess(file) {
            let _this = this
            _this.uploadImg = location.protocol + "//" + location.hostname+":80/"+file.data.replace(/\\/g,"/")
            if(_this.bgImg){
                _this.editData.url = _this.uploadImg
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

<style>

</style>