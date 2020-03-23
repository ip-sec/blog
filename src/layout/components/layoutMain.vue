<template>
    <div>
        <div class="bg-img" :style="{background: 'url('+bgImg+')'+'no-repeat center center',backgroundSize: 'cover'}">
            <el-row :gutter="20" class="center-font">
                <transition name="fontLeft" appear>
                    <el-col :xs="24" :sm="12" :md="12" :lg="12">
                        <div class="text-top">
                            <p>探索之路&nbsp;&nbsp;何其漫长</p>
                        </div>
                    </el-col>
                </transition>
                <transition name="fontRight" appear>
                    <el-col :xs="24" :sm="12" :md="12" :lg="12">
                        <div class="text-bottom">
                            <p>唯有&nbsp;&nbsp;满腔热血</p>
                        </div>
                    </el-col>
                </transition>
            </el-row>
        </div>
        <div class="null">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            bgImg: this.$store.state.bgImg[this.$route.meta.index-1].imgUrl
        }
    },
    created(){
        document.title = this.$route.meta.title
    },
    destroyed () {
        this.$store.state.drawer = false
    }
}
</script>
    
<style  lang="scss" scoped>
    @import '@/style/layout/img.scss';
    .null{
        transition: all .6s;
        padding-top: 450px;
    }
    @media screen and (max-width: 600px){
    .null{
        padding-top: 300px;
    }
}
</style>