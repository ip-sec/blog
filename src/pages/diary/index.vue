<template>
    <layout-main>
        <transition name="bottomY" tag="div" mode="out-in" appear>
            <div class="time-item" v-if="$store.state.home_get.diary">
                <div class="diary-left">
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <central-slot></central-slot>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" v-loading="loading">
                        </el-col>
                    </el-row>
                </div>
                <div ref="refScroll" class="diary-right hidden-sm-and-down">
                    <el-row>
                        <el-col ref="refScrollCol" :xs="24" :sm="24" :md="24" :lg="24">
                            <transition name="bottomDelY" mode="out-in" appear>
                                <central-sort></central-sort>
                            </transition>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </transition>
    </layout-main>
</template>

<script>
import layoutMain from '@/layout/components/layoutMain'
import CentralSlot from './components/about'
import CentralSort from './components/sort'
import getPageScroll from '@/utils/mixins/getPageScroll'
import getDomScroll from '@/utils/mixins/getDomScroll'
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
    mixins:[getPageScroll,getDomScroll],
    methods:{
        getDomScroll () {
            let _this = this
            if(_this.$refs.refScroll !== undefined){
                let domTop = _this.$refs.refScroll.getBoundingClientRect().top
                domTop < 0 ? _this.isFixed = true : _this.isFixed = false
            }else{
                return false
            }
        },
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
        display: flex;
        justify-content: space-between;
        .diary-left{
            width: 100%;
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
        .diary-right{
            min-width: 300px;
            margin-left: 30px;
            .el-row{
                .el-col{
                    transition: all 0.6s;
                    width: 300px;
                }
            }
        }
    }
</style>