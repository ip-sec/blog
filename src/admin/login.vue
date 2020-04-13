<template>
    <el-container class="login-container" :style="{width: pageWidth,height: pageHeight}">
        <transition name="topBottom" appear>
            <el-main v-show="showLogin">
                <el-form 
                :label-position="labelPosition" 
                :rules="rules" ref="ruleLogin" 
                @submit.native.prevent="setInfo"
                label-width="60px">
                    <el-form-item>
                        <el-divider><h3>后台控制登入</h3></el-divider>
                    </el-form-item>
                    <el-form-item label="账号：" prop="username">
                        <el-input v-model="formLabelAlign.username" prefix-icon="el-icon-user" placeholder="请输入账号" autocomplete="off" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                        <el-input v-model="formLabelAlign.password" prefix-icon="el-icon-key" placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="formLabelAlign.checked">记住我</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="width: 60%" :loading="loading" @click="commit" plain>登入</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </transition>
    </el-container>
</template>


<script>
import getPageSize from '@/utils/mixins/getPageSize'
import data from '../utils/request'
export default {
    name: 'login',
    data () {
        return {
            loading: false,
            showLogin: true,
            labelPosition: 'left',
            formLabelAlign: {
                username: '',
                password: '',
                checked: false
            },
            rules: {
                username: [
                    { required: true, message: '输入账号喔( •̀ ω •́ )', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '输入密码喔( •̀ ω •́ )', trigger: 'blur' }
                ]
            }
        }
    },
    mixins: [getPageSize],
    methods: {
        commit () {
            this.$refs.ruleLogin.validate((valid) => {
                if (valid) {
                    this.loading = true
                    this.$store.dispatch('admin_post/login',this.formLabelAlign).then(()=>{
                        this.showLogin = !this.showLogin
                        this.$router.push('/systemTina')
                    }).catch(()=>{})
                }else{
                    return false
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .login-container{
        @include flex-center;
        background: linear-gradient(to right bottom,lightskyblue,lightpink);
        .el-main{
            @include flex-center;
            .el-form{
                transition: all .6s;
                width: 550px;
                padding: 25px;
                background: white;
                .el-form-item:first-child>.el-form-item__content,
                .el-form-item:last-child>.el-form-item__content
                {
                    margin: 0 !important;
                }
                .el-form-item:last-child{
                    text-align: center;
                    .el-button{
                        &:hover,&:focus{
                            border-color: #E36049;
                        }
                    }
                }
            }
        }
    }
</style>