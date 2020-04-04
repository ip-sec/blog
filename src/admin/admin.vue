<template>
    <div class="system-contain"  :style="{ height: pageHeight}">
        <el-container class="admin-container"  v-if="$store.state.admin_get.menu">
            <el-aside width="auto" >
                <el-header height="65px">
                    <router-link to="/systemTina" tag="span" :class="headLogo">Tina blog</router-link>
                </el-header>
                <transition name='menuList' mode="out-in" appear>
                    <left-menu :isCollapse="isCollapse"></left-menu>
                </transition>
            </el-aside>
            <el-container>
                <el-header height="65px">
                    <div class="flex-left">
                        <span class="switch-aside hidden-sm-and-down" :class="spanClass" @click="switchAside"></span>
                    </div>
                    <div class="flex-right">
                        <span class="el-icon-refresh reset-cache" @click="resetCache"></span>
                        <span class="el-icon-switch-button colse-page" @click="delToken"></span>
                    </div>
                </el-header>
                <el-main height="100%">
                    <transition name="mainPage" appear mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
        <div v-else v-loading="true"></div>
    </div>
    
</template>

<script>
import leftMenu from './pages/Menu/index'
import getPageSize from '@/utils/mixins/getPageSize'
export default {
    name: 'admin',
    data () {
        return {
            spanClass: 'el-icon-s-unfold',
            headLogo: 'logo',
            isCollapse: false,
        }
    },
    created(){
        this.$store.state.admin_get.menu == null 
        ? this.$store.dispatch('admin_get/menu').then(()=>{
        }).catch(()=>{})
        : ''
        document.title = this.$route.meta.title
    },
    mixins: [getPageSize],
    components:{
        leftMenu
    },
    methods: {
        switchAside(){
            this.isCollapse = !this.isCollapse
            this.spanClass == 'el-icon-s-unfold' ? this.spanClass = 'el-icon-s-fold' : this.spanClass = 'el-icon-s-unfold'
            this.headLogo == 'logo' ? this.headLogo = 'small-logo' : this.headLogo = 'logo'
        },
        delToken () {
            console.log(1)
        },
        resetCache () {
            this.$store.dispatch('admin_get/resetCache').then(()=>{
                this.$message({
                    message: '后台打扫成功~',
                    type: 'success'
                });
                window.location.reload()
            }).catch(()=>{})
        }
    }
}
</script>

<style lang="scss" scoped>
    .system-contain{
        margin: 0 auto;
        display: flex;
        justify-content: center;
        transition: all .6s;
        width: 75%;
        .admin-container {
            .el-aside{
                transition: all .6s;
                border-right: 1px solid #e6e6e6;
                @include page-scroll(5px);
                >.el-header{
                    padding: 0 10px;
                    text-align: center;
                    .logo{
                        @include logo($weight: bold);
                    }
                    .small-logo{
                        @include logo($weight: bold,$size: 10px);
                    }
                }
                @include vue-trans(menuList,translateY(50px),2s);
            }
            .el-container{
                .el-header{
                    border-bottom: 1px solid #e6e6e6;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .switch-aside{
                        justify-content: flex-start;
                        @include logo($size:22px,$line: none);
                    }
                    .colse-page{
                        padding: 0 15px;
                        @include logo($size:20px,$line: none);
                        &:hover{
                            transform: scale(1.1);
                        }
                    }
                    .reset-cache{
                        @include logo($size:20px,$line: none);
                        &:hover{
                            transform: rotateZ(360deg);
                        }
                    }
                }
                .el-main{
                    position: relative;
                    @include page-scroll(5px);
                    @include vue-trans(mainPage,translateY(50px),.6s);
                }
            }
        }
    }
    @media screen and (max-width: 768px){
        .system-contain{
            width: 100%;
        }
    }
</style>