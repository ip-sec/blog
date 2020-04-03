<template>
    <el-row class="upload-contain">
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
            <el-button>上传至相册</el-button>
        </el-col>
        <el-col :sm="24" :xs="24" :md="24" :lg="24">
            <el-upload
                action="http://localhost:80/admin/upload"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :before-upload="handleJudge"
                :on-remove="handleRemove"
                multiple>
                <i class="el-icon-plus"></i>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data(){
        return {
            value: '',
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleJudge(file){
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
            padding-bottom: 10px;
            .el-select{
                padding-top: 10px;
            }
        }
    }
</style>