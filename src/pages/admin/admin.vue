<template>
    <div class="system-contain"  :style="{ height: pageHeight}">
        <el-container class="admin-container">
            <el-aside width="auto">
                <el-header height="70px">
                    <span :class="headLogo">Tina blog</span>
                </el-header>
                <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>
                        <el-menu-item-group>
                        <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header height="70px">
                    <span class="switch-aside hidden-sm-and-down" :class="spanClass" @click="switchAside"></span>
                    <span class="el-icon-switch-button colse-page" @click="delToken"></span>
                </el-header>
                <el-main height="100%">
                    <!-- Main content -->
                </el-main>
            </el-container>
        </el-container>
    </div>
    
</template>

<script>
import getPageSize from '@/utils/mixins/getPageSize'
export default {
    name: 'admin',
    data () {
        return {
            spanClass: 'el-icon-s-unfold',
            headLogo: 'logo'
        }
    },
    created(){
        document.title = this.$route.meta.title
    },
    mixins: [getPageSize],
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
                .el-menu{
                    border-right: 0px;
                }
                .el-menu-vertical-demo:not(.el-menu--collapse) {
                    width: 200px;
                    min-height: 400px;
                }
                >.el-header{
                    padding: 0 10px;
                    text-align: center;
                    .logo{
                        transition: all .6s;
                        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                        line-height: 70px;
                        font-size: 20px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                    .small-logo{
                        transition: all .6s;
                        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                        line-height: 70px;
                        font-size: 10px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                }
            }
            .el-container{
                .el-header{
                    border-bottom: 1px solid #e6e6e6;
                    .switch-aside{
                        line-height: 70px;
                        font-size: 22px;
                        cursor: pointer;
                    }
                    .colse-page{
                        float: right;
                        line-height: 70px;
                        font-size: 22px;
                        cursor: pointer;
                    }
                }
                .el-main{
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