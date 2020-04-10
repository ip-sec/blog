<template>
    <div class="add-diary">
        <transition name="bottomY" mode="out-in" appear>
            <el-form label-position="left" ref="ruleAddDiary" :rules="rules" :model="addData" @submit.native.prevent="handleAdd">
                <el-form-item label="标题：" prop="title">
                    <el-input v-model="addData.title"  maxlength="20" show-word-limit clearable></el-input>
                </el-form-item>
                <el-form-item label="简介：" prop="introduction">
                    <el-input v-model="addData.introduction" type="textarea" maxlength="50" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="内容：" prop="content">
                    <el-input v-model="addData.content" type="textarea" autosize ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-plus" @click="handleAdd">添加</el-button>
                    <el-button icon="el-icon-document-checked" @click="handleSave">保存</el-button>
                </el-form-item>
            </el-form>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            addData: {
                title: '',
                introduction: '',
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
                content:[
                    { required: true, message: '输入内容信息( •̀ ω •́ )', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        handleAdd(){
            let _this = this
            _this.$refs.ruleAddDiary.validate((valid) => {
                if (valid) {
                    _this.addData['state'] = 0
                    _this.$store.dispatch('admin_post/saveDiary',_this.addData).then(()=>{
                        let data = _this.$store.state.admin_get.diary
                        data.push({
                            id: data[data.length-1] ? data[data.length-1].id+1 : 1,
                            title: _this.addData.title,
                            introduction: _this.addData.introduction,
                            datetime: new Date(_this.addData.datetime).toLocaleDateString(),
                            state: '已发布',
                            view_num: 0,
                            like_num: 0,
                            content: _this.addData.content,
                        })
                        _this.$refs.ruleAddDiary.resetFields()
                    }).catch(()=>{

                    })
                }else{
                    return
                }
            })
        },
        handleSave(){
            let _this = this
            _this.$refs.ruleAddDiary.validate((valid) => {
                if (valid) {
                    _this.addData['state'] = 1
                    _this.$store.dispatch('admin_post/saveDiary',_this.addData).then(()=>{
                        let data = _this.$store.state.admin_get.diary
                        data.push({
                            id: data[data.length-1] ? data[data.length-1].id+1 : 1,
                            title: _this.addData.title,
                            introduction: _this.addData.introduction,
                            datetime: new Date(_this.addData.datetime).toLocaleDateString(),
                            state: '待编辑',
                            view_num: 0,
                            like_num: 0,
                            content: _this.addData.content,
                        })
                        _this.$refs.ruleAddDiary.resetFields()
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