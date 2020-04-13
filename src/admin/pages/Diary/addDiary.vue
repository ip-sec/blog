<template>
    <div class="add-diary">
        <transition name="bottomY" mode="out-in" appear>
            <el-form label-position="left" ref="ruleAddDiary" :rules="rules" :model="addData" @submit.native.prevent="handleAdd(0,'已发布')">
                <el-form-item label="标题：" prop="title">
                    <el-input v-model="addData.title"  maxlength="20" show-word-limit clearable></el-input>
                </el-form-item>
                <el-form-item label="简介：" prop="introduction">
                    <el-input v-model="addData.introduction" type="textarea" maxlength="50" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="内容：" class="markdown_style" prop="markdown">
                    <mavon-editor v-model="addData.markdown" @change="change" @imgAdd="imgAdd"/>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-plus" @click="handleAdd(0,'已发布')">添加</el-button>
                    <el-button icon="el-icon-document-checked" @click="handleAdd(1,'待编辑')">保存</el-button>
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
            }
        }
    },
    methods:{
        change(value, render){
            this.addData.html = render;
        },
        imgAdd(pos,file){
            console.log(pos,file)
        },
        handleAdd(state,stateName){
            let _this = this
            _this.$refs.ruleAddDiary.validate((valid) => {
                if (valid) {
                    _this.addData['state'] = state
                    _this.$store.dispatch('admin_post/saveDiary',_this.addData).then(()=>{
                        let data = _this.$store.state.admin_get.diary
                        data.push({
                            id: data[data.length-1] ? data[data.length-1].id+1 : 1,
                            title: _this.addData.title,
                            introduction: _this.addData.introduction,
                            datetime: new Date(_this.addData.datetime).toLocaleDateString(),
                            state: stateName,
                            view_num: 0,
                            like_num: 0,
                            markdown: _this.addData.markdown,
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

<style lang="scss"> 
    .add-diary{
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