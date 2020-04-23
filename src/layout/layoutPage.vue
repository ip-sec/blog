<template>
    <el-container direction="vertical" class="layout-page">
        <el-header ref="refHead" height="70px">
            <transition name="topY" appear>
                <keep-alive>
                    <layout-header></layout-header>
                </keep-alive>
            </transition>
        </el-header>
        <el-main ref="refMain" :style="{background:bgColor}">
            <transition :name="$store.state.common.trans" mode="out-in" appear>
                <router-view></router-view>
            </transition>
        </el-main>
        <layout-nav></layout-nav>
        <layout-caledar></layout-caledar>
        <div ref="refMusic" class="left-music hidden-md-and-up" @click.self="listMusic">
            <layout-music></layout-music>
        </div>
        <el-backtop></el-backtop>
    <!-- <canvas ref="refCanvas" :width="pageWidth" :height="pageHeight"></canvas> -->
    </el-container>
</template>

<script>
import layoutHeader from './components/layoutHeader'
import layoutNav from '../components/Nav/index'
import layoutMusic from '../components/Music/index'
import layoutCaledar from '../components/Caledar/index'
import getPageWheel from '@/utils/mixins/getPageWheel'
import getPageUnload from '@/utils/mixins/getPageUnload'
export default {
    name: 'layoutPage',
    data () {
        return {
            bgColor: 'white',
            ifSwitch: false
        }
    },
    created () {
        this.$store.dispatch('home_get/menu').then(()=>{
            if(document.getElementById('loading')){
                document.body.removeChild(document.getElementById('loading'))
            }
        }).catch(()=>{
            this.$message({
                message: 'error,加载失败'
            })
        })
    },
    mounted(){
        this.checkBgColor()
    },
    mixins:[getPageWheel,getPageUnload],
    components:{
        layoutHeader,
        layoutNav,
        layoutCaledar,
        layoutMusic
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
        listMusic(){
            this.ifSwitch = !this.ifSwitch
            if(this.ifSwitch){
                this.$refs.refMusic.style.width = '310px'
                this.$refs.refMusic.style.paddingRight = '50px'
            }else{
                this.$refs.refMusic.style.width = '0px'
                this.$refs.refMusic.style.paddingRight = '20px'
            }
        },
    }
}
</script>
    
<style lang="scss" scoped>
.layout-page{
    transition: all 0.6s;
    width: 80%;
    margin: 0 auto;
    .el-header{
        z-index: 2000;
        position: fixed;
        width: 80%;
        transition: all 0.6s;
        background: white;
        border-bottom: 1px solid #e6e6e6;
    }
    .el-main{
        margin-top: 80px;
        transition: all 0.6s;
        &::-webkit-scrollbar{
            width: 0px;
        }
    }
    .left-music{
        position: fixed;
        left: 0;
        bottom: 10%;
        width: 0px;
        background: rgba($color: #000000, $alpha: .5);
        transition: all 0.6s;
        padding-right: 20px;
        overflow: hidden;
        &::after{
            content: '\e6dc';
            position: absolute;
            right: 0px;
            top: 0;
            bottom: 0;
            width: 20px;
            height: 174px;
            display: block;
            cursor: pointer;
            background-color: rgb(201, 109, 93);
            color: white;
            text-align: center;
            line-height: 170px;
            font-family: element-icons!important
        }
    }
}
@media screen and (max-width: 768px){
    .layout-page{
        width: 100%;
    }
    .layout-page .el-header{
        width: 100% !important;
    }
}
</style>