<template>
    <layout-main>
        <div class="time-item" v-if="$store.state.home_get.diary">
            <el-row>
                <el-col :xs="24" :sm="24" :md="17" :lg="17">
                    <central-slot></central-slot>
                </el-col>
                <el-col :xs="24" :sm="24" :md="7" :lg="7" class="hidden-sm-and-down" 
                style="paddingLeft:30px;float:right">
                    <central-sort></central-sort>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="24" :md="17" :lg="17" v-loading="loading">
                </el-col>
            </el-row>
        </div>
    </layout-main>
</template>

<script>
import layoutMain from '@/layout/components/layoutMain'
import CentralSlot from './components/about'
import CentralSort from './components/sort'
import getPageScroll from '@/utils/mixins/getPageScroll.js'
export default {
    name: 'diary',
    data () {
        return {
            loading: false
        }
    },
    created (){
        this.$store.state.home_get.diary == null 
        ? this.$store.dispatch('home_get/diary', '').then(()=>{}).catch(()=>{}) 
        : ''
    },
    components:{
        CentralSlot,
        layoutMain,
        CentralSort
    },
    mixins:[getPageScroll],
    methods:{
        morePhoto () {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            },1000)
        }
    }
}
</script>
    
<style lang="scss">
    .time-item{
        padding-top: 20px;
    .el-row{
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