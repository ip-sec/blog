<template>
    <div>
        <div class="bg-img" 
        :style="{background: 'url('+bgImg+')'+'no-repeat center center',backgroundSize: 'cover'}">
        </div>
        <slot></slot>
        <el-footer height="auto">
            <keep-alive>
                <layout-footer></layout-footer>
            </keep-alive>
        </el-footer>
    </div>
</template>

<script>
import layoutFooter from './layoutFooter'
export default {
    data () {
        return {
            bgImg: this.$store.state.common.bgImg[this.$route.meta.index-1].imgUrl
        }
    },
    destroyed () {
        this.$store.dispatch('common/drawer',false)
    },
    components:{
        layoutFooter,
    }
}
</script>
    
<style  lang="scss" scoped>
.bg-img{
    @include flex-box(flex-end, center);
    height: 200px;
    width: 100%;
    margin-left: -20px;
    margin-top: -15px;
    padding-right: 40px;
    transition: all .6s;
}
.el-footer{
    padding-top: 20px;
}
</style>