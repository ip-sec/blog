<template>
    <div class="upload-contain">
        <el-row  v-if="$store.state.admin_get.photo_class">
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
                <label>相册类别：</label>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in $store.state.admin_get.photo_class"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                    </el-option>
                </el-select>
                <el-button @click="uploadPhoto">上传至相册</el-button>
            </el-col>
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
                <el-upload
                    action="http://localhost:80/admin/upload"
                    ref="refUpload"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :before-upload="handleJudge"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-col>
        </el-row>
        <el-col :sm="24" :xs="24" :md="24" :lg="24" v-else v-loading="true"></el-col>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            value: '',
            photoData: {
                fileList: []
            },
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    created() {
        this.$store.state.admin_get.photo_class == null 
        ? this.$store.dispatch('admin_get/photoCategory').then(()=>{}).catch(()=>{})
        : ''
    },
    methods: {
        uploadPhoto() {
            if(this.value == ''){
                this.$message.error('先选择好类别名称喔');
                return false
            }else{
                this.$store.dispatch('admin_post/savePhoto',this.photoData).then(()=>{
                    this.$refs.refUpload.clearFiles()
                }).catch(()=>{})
            }
        },
        handleSuccess(file) {
            this.photoData.fileList.push(
                {   
                    category_id: parseInt(this.value),
                    url:location.protocol + "//" + location.hostname+":80/"+file.data.replace(/\\/g,"/")
                }
            )
        },
        handleRemove(file) {
            if(file.response == undefined){
                return
            }else{
                let data = {
                    url: file.response.data
                }
                this.$store.dispatch('admin_post/delPhotoFile',data).then(()=>{
                    
                }).catch(()=>{})
            }
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleJudge(file) {
            if(this.value == ''){
                this.$message.error('先选择好类别名称喔');
                return false
            }else{
                return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .upload-contain{
        padding-top: 30px;
        .el-col{
            padding-bottom: 30px;
            &:first-child{
                .el-button{
                    margin-top: 10px;
                }
            }
            .el-select{
                padding-top: 10px;
            }
        }
    }
</style>