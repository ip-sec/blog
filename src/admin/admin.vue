<template>
    <div class="system-contain"  :style="{ height: pageHeight}">
        <el-container class="admin-container"  v-if="$store.state.admin_get.menu">
            <el-aside width="auto" >
                <el-header height="65px">
                    <router-link to="/systemTina" tag="span" :class="headLogo">Tina blog</router-link>
                </el-header>
                <transition name='bottomY' mode="out-in" appear>
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
                    <transition name="bottomY" appear mode="out-in">
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
    @import '../style/admin.scss';
</style>