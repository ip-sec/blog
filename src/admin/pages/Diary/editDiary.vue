<template>
    <div class="edit-diary">
        <transition name="bottomY" mode="out-in" appear>
            <el-form label-position="left" ref="ruleEditDiary" :rules="rules" :model="editData" @submit.native.prevent="updateData">
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
                <el-form-item label="内容：" prop="content">
                    <el-input v-model="editData.content" type="textarea" autosize ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-edit" @click="updateData">修改</el-button>
                    <el-button icon="el-icon-document-checked" @click="saveData">保存</el-button>
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
                datetime: new Date().getTime(),
                content_id: '',
                content: '',
            },
            rules:{
                title:[
                    { required: true, message: '输入标题信息( •̀ ω •́ )', trigger: 'blur' }
                ],
                introduction:[
                    { required: true, message: '输入简介信息( •̀ ω •́ )', trigger: 'blur' }
                ],
                content:[
                    { required: true, message: '输入内容信息( •̀ ω •́ )', trigger: 'blur' }
                ]
            }
        }
    },
    watch:{
        '$store.state.common.listData':function(to,from){
            this.editData = to
            this.select_id = to.id
        }
    },
    methods:{
        siteData(){
            this.$store.dispatch('common/listData',this.$store.state.admin_get.diary[this.select_id-1]).then(()=>{
            }).catch(()=>{})
        },
        updateData(){
            let _this = this
            _this.$refs.ruleEditDiary.validate((valid) => {
                if (valid) {
                    _this.addData['state'] = 0
                    _this.$store.dispatch('admin_post/updateDiary',_this.addData).then(()=>{
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
        },
        saveData(){
            let _this = this
            _this.$refs.ruleEditDiary.validate((valid) => {
                if (valid) {
                    _this.addData['state'] = 1
                    _this.$store.dispatch('admin_post/updateDiary',_this.addData).then(()=>{
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

<style>

</style>