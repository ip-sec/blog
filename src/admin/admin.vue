<template>
    <div class="system-contain"  :style="{ height: pageHeight}">
        <el-container class="admin-container"  v-if="$store.state.admin_get.menu">
            <el-aside width="auto" >
                <el-header height="65px">
                    <span :class="headLogo">Tina blog</span>
                </el-header>
                <transition name='menuList' mode="out-in" appear>
                    <left-menu :isCollapse="isCollapse"></left-menu>
                </transition>
            </el-aside>
            <el-container>
                <el-header height="65px">
                    <span class="switch-aside hidden-sm-and-down" :class="spanClass" @click="switchAside"></span>
                    <span class="el-icon-switch-button colse-page" @click="delToken"></span>
                </el-header>
                <el-main height="100%">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        <div v-else v-loading="true"></div>
    </div>
    
</template>

<script>
import leftMenu from './components/Menu/index'
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
                    .switch-aside{
                        @include logo($size:22px);
                    }
                    .colse-page{
                        float: right;
                        padding: 0 15px;
                        @include logo($size:20px);
                    }
                }
                .el-main{
                    @include page-scroll(5px);
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