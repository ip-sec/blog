<template>
    <layout-main>
        <div class="selfint">
            <transition name="bottomY" mode="out-in" appear>
                <el-row class="selfint-center">
                    <el-col :xs="24" :sm="20" :md="20" :lg="20">
                        <h1>介绍</h1>
                        <el-divider>关于我</el-divider>
                        <p>一个大学刚毕业的前端实习生</p>
                        <p>主修计算机网络技术跑路到软件行业的小憨憨:)</p>
                        <p>会JS,H5,C3,Bootstrap,Vue一家子,Jquery,Element</p>
                        <p>了解Sass,PHP,TP5,数据库的CURD~</p>
                        <el-divider>关于网站</el-divider>
                        <p>个人网站会进行不间隔的更新，当然是分享以及记录工作中遇到的坑和日常吐槽~</p>
                        <p>由于博主是个电影控，也会不定期的推送一些百度云电影资源的链接~</p>
                        <p>以及更新音乐播放内容~当然，手动建博纯属手痒~哈哈哈嗝~</p>
                        <central-slot></central-slot>
                    </el-col>
                </el-row>
            </transition>
        </div>
    </layout-main>
</template>

<script>
import layoutMain from '@/layout/components/layoutMain'
import CentralSlot from './components/info-button'
export default {
    name: 'isme',
    data () {
        return {
            
        }
    },
    created(){
        this.$store.dispatch('common/ismeNum')
    },
    components:{
        CentralSlot,
        layoutMain
    }
}
</script>
    
<style lang="scss" scoped>
    .selfint{
        padding-top: 20px;
        .selfint-center{
            @include flex-center;
            .el-col{
                position: relative;
                transition: all .6s;
                min-height: 500px;
                padding: 20px 20px 60px 20px;
                background: white;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                text-align: center;
                p{
                    padding: 5px;
                }
            }
        }
    }
</style>