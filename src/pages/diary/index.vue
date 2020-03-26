<template>
    <layout-main>
        <div class="time-item">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="14" :lg="14">
                    <central-slot></central-slot>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :xs="12" :sm="12" :md="12" :lg="12" v-loading="loading">
                </el-col>
            </el-row>
        </div>
    </layout-main>
</template>

<script>
import layoutMain from '@/layout/components/layoutMain'
import CentralSlot from './components/about'
import getPageScroll from '@/utils/mixins/getPageScroll.js'
export default {
    name: 'diary',
    data () {
        return {
            loading: false
        }
    },
    components:{
        CentralSlot,
        layoutMain
    },
    mixins:[getPageScroll],
    methods:{
        morePhoto () {
            this.loading = true
            // const pushPhoto = { id: this.$store.state.timeData.length+1, dateTime: new Date().toLocaleDateString(), title: '发布说说', context: '这是一篇文章'}
            // setTimeout(() => {
            //     this.loading = false
            //     this.$store.state.timeData.push(pushPhoto)
            // },1000)
        }
    }
}
</script>
    
<style lang="scss">
    .time-item{
    padding: 20px;
    .el-row{
        height: auto;
        display: flex;
        justify-content: center;
        &:first-child{
            .el-col{
                height: auto; 
                transition: all .6s;
            }
        }
        &:last-child{
            .el-col{
                height: 60px;
                .el-loading-mask{
                    background: none;
                    .path{
                        stroke: #E36049;
                    }
                }
            }
        }
    }
}
</style>