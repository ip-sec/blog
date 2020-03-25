<template>
    <el-container>
        <transition name="header" appear>
            <el-header v-if="headShow">
                <layout-header></layout-header>
            </el-header>
        </transition>
        <el-main :style="{background:bgColor}">
            <transition :name="$store.state.trans" mode="out-in" appear>
                <router-view></router-view>
            </transition>
        </el-main>
        <el-footer ref="refFooter" :style="{background:bgColor}">
            <layout-footer></layout-footer>
        </el-footer>
        <layout-nav></layout-nav>
        <layout-caledar></layout-caledar>
        <el-backtop></el-backtop>
    <!-- <canvas ref="refCanvas" :width="pageWidth" :height="pageHeight"></canvas> -->
    </el-container>
</template>

<script>
import layoutHeader from './components/layoutHeader'
import layoutFooter from './components/layoutFooter'
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
        this.$store.dispatch('home/menu').then(()=>{
            this.headShow = true
        }).catch(()=>{
            this.$message({
                message: 'error,加载失败'
            })
        })
    },
    components:{
        layoutHeader,
        layoutFooter,
        layoutNav,
        layoutCaledar
    },
    mounted () {
        this.checkBgColor()
        this.watchMouse()
    },
    watch:{
        '$store.state.openPage' : function (to, from) {
            to ?  this.bgColor = 'rgb(225,238,220)' : this.bgColor = 'white'
        }
    },
    methods:{
        checkBgColor () {
            this.$store.state.openPage ?  this.bgColor = 'rgb(225,238,220)' : this.bgColor = 'white'
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
    @import '@/style/layout/page.scss';
</style>