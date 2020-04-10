<template>
    <el-container direction="vertical" class="layout-page">
        <el-header v-if="headShow" height="80px">
            <transition name="topY" appear>
                <keep-alive>
                    <layout-header></layout-header>
                </keep-alive>
            </transition>
        </el-header>
        <el-main :style="{background:bgColor}">
            <transition :name="$store.state.common.trans" mode="out-in" appear>
                <router-view></router-view>
            </transition>
        </el-main>
        <keep-alive>
            <layout-nav></layout-nav>
        </keep-alive>
        <keep-alive>
            <layout-caledar></layout-caledar>
        </keep-alive>
        <el-backtop></el-backtop>
    <!-- <canvas ref="refCanvas" :width="pageWidth" :height="pageHeight"></canvas> -->
    </el-container>
</template>

<script>
import layoutHeader from './components/layoutHeader'
import layoutNav from '../components/Nav/index'
import layoutCaledar from '../components/Caledar/index'
export default {
    name: 'layoutPage',
    data () {
        return {
            bgColor: 'white',
            headShow: false,
        }
    },
    created () {
        this.$store.dispatch('home_get/menu').then(()=>{
            this.headShow = true
        }).catch(()=>{
            this.$message({
                message: 'error,加载失败'
            })
        })
    },
    components:{
        layoutHeader,
        layoutNav,
        layoutCaledar
    },
    mounted () {
        this.checkBgColor()
        this.watchMouse()
    },
    watch:{
        '$store.state.common.openPage' : function (to, from) {
            to ?  this.bgColor = 'rgb(225,238,220)' : this.bgColor = 'white'
        }
    },
    methods:{
        checkBgColor () {
            this.$store.state.common.openPage ?  this.bgColor = 'rgb(225,238,220)' : this.bgColor = 'white'
        },
        watchMouse () {
            // window.onwheel = (e) => {
            //     console.log(e.wheelDelta)
            // }
        }
    }
}
</script>
    
<style lang="scss" scoped>
.layout-page{
    transition: all 0.6s;
    width: 80%;
    margin: 0 auto;
    .el-header{
        width: 100%;
        transition: all 0.6s;
    }
    .el-main{
        width: 100%;
        transition: all 0.6s;
        &::-webkit-scrollbar{
            width: 0px;
        }
    }
}
@media screen and (max-width: 768px){
    .layout-page{
        width: 100%;
    }
}
</style>