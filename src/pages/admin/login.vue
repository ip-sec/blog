<template>
    <el-container class="login-container" :style="{width: pageWidth,height: pageHeight}">
        <transition
        name="login-trans"
        appear
        appear-class="login-appear-class"
        appear-to-class="login-appear-to-class"
        appear-active-class="login-appear-active-class"
        >
            <el-main v-show="showLogin">
                <el-form :label-position="labelPosition" label-width="55px">
                    <el-form-item>
                        <el-divider><h3>后台控制登入</h3></el-divider>
                    </el-form-item>
                    <el-form-item label="账号：">
                        <el-input v-model="formLabelAlign.name" prefix-icon="el-icon-user" placeholder="请输入账号" autocomplete="off" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="密码：">
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
import data from '../../utils/request'
export default {
    name: 'login',
    data () {
        return {
            loading: false,
            showLogin: true,
            labelPosition: 'left',
            formLabelAlign: {
                name: '',
                password: '',
                type: '',
                checked: false
            }
        }
    },
    created() {
        document.title = this.$route.meta.title
    },
    mixins: [getPageSize],
    methods: {
        commit () {
            this.loading = true
            this.showLogin = !this.showLogin
            // this.$router.push('/systemTina')
        }
    }
}
</script>

<style lang="scss">
    .login-container{
        @include flex-center;
        background: linear-gradient(to right bottom,lightskyblue,lightpink);
        .login-appear-class{
            opacity: 0;
            transform: translateY(-100px);
        }
        .login-appear-active-class{
            transition: all 4s;
        }
        .login-appear-to-class{
            opacity: 1;
            transform: translateY(0px);
        }
        .login-trans-enter,
        .login-trans-leave-to{
            opacity: 0;
            transform: translateY(100px);
        }
        .login-trans-enter-active,
        .login-trans-leave-active{
            transition: all 2s;
        }
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
                }
            }
        }
    }
</style>