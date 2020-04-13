<template>
    <div>
        <div class="bg-img" :style="{background: 'url('+bgImg+')'+'no-repeat center center',backgroundSize: 'cover'}">
            <!-- <el-row class="center-font">
                <transition name="fontLeft" mode="out-in" appear>
                    <el-col :xs="24" :sm="12" :md="12" :lg="12">
                        <div class="text-top">
                            <p>探索之路&nbsp;&nbsp;何其漫长</p>
                        </div>
                    </el-col>
                </transition>
                <transition name="fontRight" mode="out-in" appear>
                    <el-col :xs="24" :sm="12" :md="12" :lg="12">
                        <div class="text-bottom">
                            <p>唯有&nbsp;&nbsp;满腔热血</p>
                        </div>
                    </el-col>
                </transition>
            </el-row> -->
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
    .center-font{
        height: 70%;
        width: 100%;
        @include vue-trans(fontLeft,translateY(100px),2s);
        @include vue-trans(fontRight,translateY(-100px),2s);
        .el-col{
            font-family: YouYuan;
            color: white;
            &:first-child{
                height: 25%;
                text-align: center;
                @include flex-center;
                .text-top{
                    font-size: 30px;
                }
            }
            &:last-child{
                height: 60%;
                text-align: right;
                @include flex-box(flex-end,flex-end);
                .text-bottom{
                    padding:0px 50px 30px 0px;
                    font-size: 16px;
                }
            }
        }
    }
}
.el-footer{
    padding-top: 20px;
}
</style>